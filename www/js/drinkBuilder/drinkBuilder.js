(function (angular) {
	angular.module('drinkup.drinkBuilder', [
		'ionic',
		'drinkup.data.drinkTypes'
	])

		.controller('DrinkBuilderCtrl', function ($scope, $state, $stateParams, $ionicHistory, drinkCategories, drinkTypesRepository) {
			$scope.selectCategory = function (category) {
				$scope.drinkType.category = category;
				$scope.drinkType.abv      = category.typicalAbv;
				$scope.drinkType.calPerMl = category.typicalCalPerMl;
			};

			$scope.saveDrink = function () {
				drinkTypesRepository.save($scope.drinkType);
				$scope.cancel();
			};

			$scope.cancel = function() {
				if ($ionicHistory.backView()) {
					$ionicHistory.goBack();
				} else {
					$state.go('app.drinks');
				}
			};

			$scope.drinkCategories = Object.keys(drinkCategories);

			$scope.drinkType = drinkTypesRepository.get($stateParams.drinkId) || {
					name: 'My New Drink',
					category: $scope.drinkCategories[0]
				};
		});
}(angular));