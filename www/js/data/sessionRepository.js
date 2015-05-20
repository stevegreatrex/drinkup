/**
 * Created by Stephen on 20/05/2015.
 */
/**
 * Created by Stephen on 18/05/2015.
 */
(function(angular) {
	angular.module('drinkup.data.sessionRepository', [])

		.factory('sessionRepository', function($q, $indexedDB, moment, utils, sessionLevels) {
			function SessionRepository() {
			}

			SessionRepository.prototype._openStore = function(storeName) {
				var defer = $q.defer();
				storeName = storeName || 'session';

				$indexedDB.openStore(storeName, function(store) {
					defer.resolve(store);
				});

				return defer.promise;
			};

			SessionRepository.prototype.addSession = function() {
				var session = {
					id: utils.createGuid(),
					description: sessionLevels.getLevel(0),
					totalUnits: 0,
					startDate: moment().toDate()
				};

				return this._openStore()
					.then(function(store) {
						return store.insert(session)
					})
					.then(function() {
						return session;
					});
			};

			SessionRepository.prototype.getAllSessions = function() {
				return this._openStore()
					.then(function(store) {
						return store.getAll();
					})
					.then(function(sessions) {
						return utils.sortByReverseDate(sessions, 'startDate');
					});
			};

			SessionRepository.prototype.getSession = function(sessionId) {
				var repo = this;

				return this._openStore()
					.then(function(store) {
						return store.find(sessionId);
					})
					.then(function(session) {
						return repo._openStore('drink')
							.then(function(drinkStore) {
								return drinkStore.findWhere({
									indexName: 'sessionId',
									keyRange: IDBKeyRange.only(sessionId)
								});
							})
							.then(function(drinks) {
								session.totalUnits = session.totalUnits || 0;
								session.drinks = utils.sortByReverseDate(drinks || [], 'date');
								return session;
							});
					})
			};

			SessionRepository.prototype.addDrink = function(sessionId, drinkType) {
				var repo = this;
				var drink = {
					sessionId: sessionId,
					drinkType: drinkType,
					id: utils.createGuid(),
					date: moment.utc().toDate()
				};

				return this.getSession(sessionId)
					.then(function(session) {
						session.totalUnits = 0 + session.totalUnits + drink.drinkType.units;
						session.description = sessionLevels.getLevel(session.totalUnits);

						return repo._openStore('drink')
							.then(function(drinkStore) {
								return drinkStore.insert(drink);
							})
							.then(function() {
								return repo._openStore();
							})
							.then(function(sessionStore) {
								return sessionStore.upsert(session);
							})
							.then(function() {
								return drink;
							});
					});
			};

			return new SessionRepository();
		});
}(angular));