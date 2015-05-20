
(function(angular) {
	angular.module('drinkup.session', [
		'ionic',
		'drinkup.data.sessionRepository'
	])

		.controller('SessionCtrl', function ($scope, $stateParams, moment, sessionRepository) {
			sessionRepository.getSession($stateParams.sessionId)
				.then(function(session) {
					$scope.startDate = moment(session.startDate);
					$scope.description = session.description;
				});
		});
}(angular));