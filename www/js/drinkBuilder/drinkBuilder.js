(function (angular) {
	angular.module('drinkup.drinkBuilder', [
		'ionic',
		'drinkup.data.drinkTypes'
	])

		.controller('DrinkBuilderCtrl', function ($scope, $state, $stateParams, $ionicHistory, drinkCategories, drinkTypesRepository) {
			$scope.selectCategory = function (category) {
				$scope.drinkType.category = category;
				if (!$scope.drinkType.abv) {
					$scope.drinkType.abv = drinkCategories[category].typicalAbv;
				}
				if (!$scope.calories.per100) {
					$scope.calories.per100 = drinkCategories[category].typicalCalPerMl * 100;
				}
			};

			$scope.saveDrink = function () {
				$scope.drinkType.calPerMl = $scope.calories.per100 / 100;
				drinkTypesRepository.save($scope.drinkType);
				$scope.cancel();
			};

			$scope.cancel = function () {
				if ($ionicHistory.backView()) {
					$ionicHistory.goBack();
				} else {
					$state.go('app.drinks');
				}
			};

			$scope.$on('$stateChangeSuccess', function (event, toState) {
				if (toState.name === 'app.drink') {
					load();
				}
			});

			function load() {
				$scope.drinkType = drinkTypesRepository.get($stateParams.drinkId) || {};

				$scope.calories = {
					per100: $scope.drinkType.calPerMl ? $scope.drinkType.calPerMl * 100 : null
				};

				if (!$scope.drinkType.category) {
					$scope.selectCategory($scope.drinkCategories[0]);
				}
			}

			$scope.drinkCategories = Object.keys(drinkCategories);

			load();
		});
}(angular));