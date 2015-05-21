
(function(angular) {
	angular.module('drinkup.session', [
		'ionic',
		'drinkup.data.sessionRepository',
		'drinkup.data.drinkTypes'
	])

		.controller('SessionCtrl', function ($scope,
																				 $stateParams,
																				 $interval,
																				 moment,
																				 sessionRepository,
																				 drinkTypes,
																				 sessionLevels,
																				 calculator,
																				 utils,
																				 profile) {
			$scope.drinkTypes = drinkTypes;

			sessionRepository.getSession($stateParams.sessionId)
				.then(function(session) {
					$scope.session = session;
					$scope.startDate = moment(session.startDate);
					$scope.description = session.description;
					$scope.drinks = session.drinks;
					updateStats();
				});

			$scope.addDrink = function(drinkType) {
				sessionRepository.addDrink($scope.session.id, drinkType)
					.then(function(drink) {
						$scope.drinks.unshift(drink);
						$scope.session.totalUnits = 0 + $scope.session.totalUnits + drink.drinkType.units;
						updateStats();
					});
			};

			function updateStats() {
				var drinkingTime = moment.duration(moment().diff($scope.startDate));
				$scope.totalUnits = $scope.session.totalUnits;
				$scope.drinkingTime = drinkingTime.humanize();
				$scope.description = sessionLevels.getLevel($scope.session.totalUnits);
				$scope.totalDrinks = $scope.drinks.length;
				$scope.bloodAlcohol = utils.roundToPaddedString(
					calculator.calculateBloodAlcohol(profile, drinkingTime, $scope.totalUnits), 3);
			}

			var monitor = $interval(updateStats, 1000 * 60);

			$scope.$on('$destroy', function() {
				if (angular.isDefined(monitor)) {
					$interval.cancel(monitor);
					monitor = undefined;
				}
			});
		});
}(angular));