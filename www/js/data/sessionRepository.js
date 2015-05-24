(function(angular) {
	angular.module('drinkup.data.sessionRepository', [])

		.factory('sessionRepository', function($ionicPlatform, $q, $indexedDB, $cordovaGeolocation, moment, drinkupUtils, sessionLevels) {
			function SessionRepository() {
			}

			SessionRepository.prototype._openStore = function(storeName) {
				var defer = $q.defer();
				storeName = storeName || 'session';

				$ionicPlatform.ready(function() {
					$indexedDB.openStore(storeName, function(store) {
						defer.resolve(store);
					});
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
						if (isNaN(session.totalUnits)) session.totalUnits = 0;
						if (isNaN(session.totalCal)) session.totalCal = 0;
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

				var getLocation = $q.defer();

				$cordovaGeolocation.getCurrentPosition()
					.then(getLocation.resolve, getLocation.resolve);

				return getLocation.promise
					.then(function(location) {
						if (location && location.coords) {
							drink.location = {
								latitude: location.coords.latitude,
								longitude: location.coords.longitude
							};
						}
					})
					.then(function() {
						return repo.getSession(sessionId);
					})
					.then(function(session) {
						if (isNaN(session.totalUnits)) session.totalUnits = 0;
						if (isNaN(session.totalCal)) session.totalCal = 0;
						session.totalUnits += drink.units;
						session.totalCal += drink.cal;
						session.description = sessionLevels.getLevel(session.totalUnits);

						return repo._openStore('drink')
							.then(function(drinkStore) {
								drinkStore.insert(drink);
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