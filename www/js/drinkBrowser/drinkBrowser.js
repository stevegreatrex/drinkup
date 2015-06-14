(function (angular) {
	angular.module('drinkup.drinkBrowser', [
		'ionic',
		'drinkup.data.sessionRepository',
		'drinkup.data.drinkTypes'
	])

		.filter('drinkSearch', function() {
			return function(drinks, searchString) {

				searchString = (searchString || '').toLowerCase();

				return drinks.filter(function(drink) {
					return drink.name.toLowerCase().indexOf(searchString) !== -1;
				});
			};
		})

		.controller('DrinkBrowserCtrl', function ($scope, $rootScope, $state, $ionicModal, drinkEvents, drinkTypesRepository) {
			$scope.drinkTypes = drinkTypesRepository.getAll();

			$scope.newDrink = function() {
				$state.go('app.drink');
			};

			$rootScope.$on(drinkEvents.drinkTypeAdded, function() {
				$scope.drinkTypes = drinkTypesRepository.getAll();
			});
		});
}(angular));