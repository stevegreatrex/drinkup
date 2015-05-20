/**
 * Created by Stephen on 18/05/2015.
 */
(function(angular) {
	angular.module('drinkup.home', [
		'ionic',
		'drinkup.data.sessionRepository'
	])

		.controller('HomeCtrl', function ($scope, $location, sessionRepository) {

			sessionRepository.getAllSessions()
				.then(function(sessions) {
					$scope.sessions = sessions;
				});

			$scope.startSession = function() {
				sessionRepository.addSession()
					.then(function(session) {
						$location.path('/app/session/' + session.id);
					});
			};
		});
}(angular));