
(function(angular) {
	angular.module('drinkup.session', [
		'ionic',
		'drinkup.data.sessionRepository',
		'drinkup.data.drinkTypes'
	])

		.controller('SessionCtrl', function ($scope, $stateParams, moment, sessionRepository, drinkTypes, sessionLevels) {
			$scope.drinkTypes = drinkTypes;
			sessionRepository.getSession($stateParams.sessionId)
				.then(function(session) {
					$scope.session = session;
					$scope.startDate = moment(session.startDate);
					$scope.description = session.description;
					$scope.drinks = session.drinks;
				});

			$scope.addDrink = function(drinkType) {
				sessionRepository.addDrink($scope.session.id, drinkType)
					.then(function(drink) {
						$scope.drinks.unshift(drink);
						$scope.session.totalUnits = 0 + $scope.session.totalUnits + drink.drinkType.units;
						$scope.description = sessionLevels.getLevel($scope.session.totalUnits);
					});
			};
		});
}(angular));