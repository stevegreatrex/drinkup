
(function(angular) {
	angular.module('drinkup.session', [
		'ionic',
		'drinkup.data.sessionRepository',
		'drinkup.data.drinkTypes'
	])

		.controller('SessionCtrl', function ($scope,
																				 $stateParams,
																				 $interval,
																				 $ionicModal,
																				 moment,
																				 sessionRepository,
																				 sessionLevels,
																				 calculator,
																				 utils,
																				 profile,
																				 drinkTypes,
																				 drinkCategories) {

			$scope.drinkCategories = drinkCategories;

			$ionicModal.fromTemplateUrl('/js/session/add-drink.html', {
				scope: $scope,
				animation: 'slide-in-up'
			}).then(function(modal) {
				$scope.addDrinkModal = modal;
			});

			sessionRepository.getSession($stateParams.sessionId)
				.then(function(session) {
					$scope.session = session;
					$scope.startDate = moment(session.startDate);
					$scope.description = session.description;
					$scope.drinks = session.drinks;
					updateStats();
				});

			$scope.searchDrinks = function(query) {
				return drinkTypes.filter(function(drink) {
					return drink.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
				});
			};

			$scope.newDrink = {};

			$scope.showAddDrinkModal = function() {
				$scope.newDrink = {};
				$scope.addDrinkModal.show()
			};

			$scope.$watch('newDrink.type', function(drinkType) {
				$scope.newDrink.serving = drinkType ? drinkCategories[drinkType.category].servings[0] : null;
			});

			$scope.addDrink = function(drinkType, serving) {
				$scope.addDrinkModal.hide();
				if (!drinkType || !serving) { return; }

				return sessionRepository.addDrink($scope.session.id, drinkType, serving)
					.then(function(drink) {
						$scope.drinks.unshift(drink);
						$scope.session.totalUnits = 0 + $scope.session.totalUnits + drink.units;
						updateStats();
					});
			};

			$scope.sameAgain = function() {
				if (!$scope.drinks.length) return;
				$scope.addDrink($scope.drinks[0].drinkType, $scope.drinks[0].serving);
			};

			$scope.cancelAddDrinkModal = function() {
				$scope.newDrink = {};
				$scope.addDrinkModal.hide()
			};

			function updateStats() {

				var timeOfLastDrink = moment($scope.drinks.length ? $scope.drinks[0].date : null);
				var endOfSession = (moment().diff(timeOfLastDrink, 'hours', true) < 4) ?
					moment() : timeOfLastDrink;

				var drinkingTime = moment.duration(endOfSession.diff($scope.startDate));

				$scope.totalUnits = utils.round($scope.session.totalUnits, 0);
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

				$scope.addDrinkModal && $scope.addDrinkModal.remove();
			});
		});
}(angular));