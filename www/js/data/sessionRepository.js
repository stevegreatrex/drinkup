(function(angular) {
	angular.module('drinkup.data.sessionRepository', [
		'pouchdb'
	])

		.constant('SessionEvents', {
			drinkAdded: 'drinkup.session.drinkAdded',
			drinkRemoved: 'drinkup.session.drinkRemoved',
			bottleCapAdded: 'drinkup.session.bottleCapAdded'
		})

		.factory('sessionRepository', function($rootScope, $ionicPlatform, $q, pouchDB, $cordovaGeolocation, moment, drinkupUtils, sessionLevels, SessionEvents) {
			function SessionRepository() {
			}

			SessionRepository.prototype._openStore = function(storeName) {
				var defer = $q.defer();
				storeName = storeName || 'session';

				$ionicPlatform.ready(function() {
					var db = pouchDB(storeName);
					defer.resolve(db);
				});

				return defer.promise;
			};

			SessionRepository.prototype.addSession = function() {
				var session = {
					_id: drinkupUtils.createGuid(),
					description: sessionLevels.getLevel(0),
					totalUnits: 0,
					startDate: moment().toDate()
				};

				session.id = session._id;

				return this._openStore()
					.then(function(store) {
						return store.post(session)
					})
					.then(function() {
						return session;
					});
			};

			SessionRepository.prototype.getAllSessions = function() {
				return this._openStore()
					.then(function(store) {
						return store.allDocs({ include_docs: true });
					})
					.then(function(result) {
						var sessions = result.rows
							.map(function(r) { return r.doc; })
							.map(function(session) { session.id = session._id; return session;});
						return drinkupUtils.sortByReverseDate(sessions, 'startDate');
					});
			};

			SessionRepository.prototype.getSession = function(sessionId) {
				var repo = this;

				return this._openStore()
					.then(function(store) {
						return store.get(sessionId);
					})
					.then(function(session) {
						if (isNaN(session.totalUnits)) session.totalUnits = 0;
						if (isNaN(session.totalCal)) session.totalCal = 0;
						session.id = session._id;

						return repo._openStore('drink')
							.then(function(drinkStore) {
								return drinkStore.createIndex({
									index: {fields: ['sessionId']}
								}).then(function () {
									return drinkStore.find({
										selector: { sessionId: sessionId}
									});
								});
							})
							.then(function(result) {
								var drinks = result.docs.map(function(d) { d.id = d._id; return d; });
								session.totalUnits = session.totalUnits || 0;
								session.totalCal = session.totalCal || 0;
								session.drinks = drinkupUtils.sortByReverseDate(drinks || [], 'date');
								return session;
							});
					});
			};

			SessionRepository.prototype.addDrink = function(sessionId, drinkType, serving) {
				var repo = this;
				var drink = {
					sessionId: sessionId,
					drinkType: drinkType,
					serving: serving,
					_id: drinkupUtils.createGuid(),
					date: moment.utc().toDate(),
					units: serving.ml * drinkType.abv / 1000,
					cal: serving.ml * drinkType.calPerMl
				};

				var getLocation = $q.defer();

				$cordovaGeolocation.getCurrentPosition({ timeout: 10000 })
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

						session.drinks.push(drink);
						$rootScope.$broadcast(SessionEvents.drinkAdded, session, drink);

						return repo._openStore('drink')
							.then(function(drinkStore) {
								drinkStore.post(drink);
							})
							.then(function() {
								return repo._openStore();
							})
							.then(function(sessionStore) {
								return sessionStore.put(session);
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
						return drinkStore.get(drinkId)
							.then(function (drink) {
								return drinkStore.remove(drink)
									.then(function() {
										return repo.getSession(sessionId);
									})
									.then(function (session) {
										session.totalUnits = session.totalUnits - drink.units;
										if (session.totalUnits < 0) session.totalUnits = 0;
										session.totalCal = 0 + session.totalCal - drink.cal;
										if (session.totalCal < 0) session.totalCal = 0;
										session.description = sessionLevels.getLevel(session.totalUnits);

										$rootScope.$broadcast(SessionEvents.drinkRemoved, session, drink);

										return repo._openStore()
											.then(function (sessionStore) {
												return sessionStore.put(session);
											});
									});
							});
					});
			};

			return new SessionRepository();
		});
}(angular));