/**
 * Created by Stephen on 20/05/2015.
 */
/**
 * Created by Stephen on 18/05/2015.
 */
(function(angular) {
	angular.module('drinkup.data.sessionRepository', [])

		.factory('sessionRepository', function($q, $indexedDB, moment, utils) {
			function SessionRepository() {
			}

			SessionRepository.prototype._openStore = function() {
				var defer = $q.defer();

				$indexedDB.openStore('session', function(store) {
					defer.resolve(store);
				});

				return defer.promise;
			};

			SessionRepository.prototype.addSession = function() {
				var session = {
					id: utils.createGuid(),
					description: 'Warm Up',
					startDate: moment.utc().toISOString()
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
						sessions.sort(function(a,b) {
							var aStart = moment(a.startDate);
							var bStart = moment(b.startDate);
							return aStart.isBefore(bStart) ? 1 : -1;
						});
						return sessions;
					});
			};

			SessionRepository.prototype.getSession = function(sessionId) {
				return this._openStore()
					.then(function(store) {
						return store.find(sessionId);
					});
			};

			return new SessionRepository();
		});
}(angular));