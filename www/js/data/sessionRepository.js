/**
 * Created by Stephen on 20/05/2015.
 */
/**
 * Created by Stephen on 18/05/2015.
 */
(function(angular) {
	angular.module('drinkup.data.sessionRepository', [])

		.factory('sessionRepository', function($q, $indexedDB, moment, drinkupUtils, sessionLevels) {
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
					id: drinkupUtils.createGuid(),
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
						return drinkupUtils.sortByReverseDate(sessions, 'startDate');
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
								session.drinks = drinkupUtils.sortByReverseDate(drinks || [], 'date');
								return session;
							});
					})
			};

			SessionRepository.prototype.addDrink = function(sessionId, drinkType, serving) {
				var repo = this;
				var drink = {
					sessionId: sessionId,
					drinkType: drinkType,
					serving: serving,
					id: drinkupUtils.createGuid(),
					date: moment.utc().toDate(),
					units: serving.ml * drinkType.abv / 1000,
					cal: serving.ml * drinkType.calPerMl
				};

				return this.getSession(sessionId)
					.then(function(session) {
						session.totalUnits = 0 + session.totalUnits + drink.units;
						session.totalCal = 0 + session.totalCal + drink.cal;
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

			SessionRepository.prototype.deleteDrink = function(sessionId, drinkId) {
				var repo = this;

				return this._openStore('drink')
					.then(function(drinkStore) {
						return drinkStore.find(drinkId)
							.then(function (drink) {
								return drinkStore.delete(drinkId)
									.then(function() {
										return repo.getSession(sessionId);
									})
									.then(function (session) {
										session.totalUnits = 0 + session.totalUnits - drink.units;
										if (session.totalUnits < 0) session.totalUnits = 0;
										session.totalCal = 0 + session.totalCal - drink.cal;
										if (session.totalCal < 0) session.totalCal = 0;
										session.description = sessionLevels.getLevel(session.totalUnits);

										return repo._openStore()
											.then(function (sessionStore) {
												return sessionStore.upsert(session);
											});
									});
							});
					});
			};

			return new SessionRepository();
		});
}(angular));