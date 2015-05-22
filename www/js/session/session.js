
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
																				 drinkupUtils,
																				 profile,
																				 drinkTypes,
																				 drinkCategories,
																				 drivingLimit) {

			$scope.drinkCategories = drinkCategories;

			$ionicModal.fromTemplateUrl('js/session/add-drink.html', {
				scope: $scope,
				animation: 'slide-in-up'
			}).then(function(modal) {
				$scope.addDrinkModal = modal;
			});

			$ionicModal.fromTemplateUrl('js/session/drink-info.html', {
				scope: $scope,
				animation: 'slide-in-up'
			}).then(function(modal) {
				$scope.drinkInfoModal = modal;
			});

			sessionRepository.getSession($stateParams.sessionId)
				.then(function(session) {
					$scope.session = session;
					$scope.description = session.description;
					$scope.drinks = session.drinks;

					$scope.startDate = session.drinks.length ?
						moment(session.drinks[session.drinks.length-1].date) : moment(session.startDate);
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
						$scope.session.totalCal = 0 + $scope.session.totalCal + drink.cal;
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

			$scope.showDrinkInfoModal = function(drink) {
				$scope.selectedDrink = drink;
				$scope.drinkInfoModal.show();
			};

			$scope.deleteDrink = function(drink) {
				if (!drink) return;
				$scope.drinkInfoModal.hide();
				sessionRepository.deleteDrink($scope.session.id, drink.id)
					.then(function() {
						$scope.drinks.splice($scope.drinks.indexOf(drink), 1);
						$scope.session.totalUnits = 0 + $scope.session.totalUnits - drink.units;
						$scope.session.totalCal = 0 + $scope.session.totalCal - drink.cal;
						updateStats();
					});
			};

			function updateStats() {

				var timeOfLastDrink = moment($scope.drinks.length ? $scope.drinks[0].date : null);
				var endOfSession = (moment().diff(timeOfLastDrink, 'hours', true) < 4) ?
					moment() : timeOfLastDrink;

				var drinkingTime = moment.duration(endOfSession.diff($scope.startDate));

				$scope.totalUnits = $scope.session.totalUnits;
				$scope.drinkingTime = drinkingTime.humanize();
				$scope.description = sessionLevels.getLevel($scope.session.totalUnits);
				$scope.totalDrinks = $scope.drinks.length;
				$scope.bloodAlcohol = calculator.calculateBloodAlcohol(profile, drinkingTime, $scope.totalUnits);
				updateChart();
			}

			function updateChart() {
				var dataPoints = [];
				var drivingLimitPoints = [
					{
						date: $scope.startDate.toDate(),
						bac: drivingLimit
					}
				];

				var totalUnits = 0;
				dataPoints.push({
					date: $scope.startDate.toDate(),
					bac: totalUnits
				});


				for (var i = $scope.drinks.length-1; i >= 0; i--) {
					var drink = $scope.drinks[i];
					var drinkTime = moment(drink.date);
					var drinkingTime = moment.duration(drinkTime.diff($scope.startDate));
					totalUnits += drink.units;
					dataPoints.push({
						date: drinkTime.toDate(),
						bac: calculator.calculateBloodAlcohol(profile, drinkingTime, totalUnits)
					});
				}

				var soberTime = moment().add(calculator.timeUntilSober($scope.bloodAlcohol)).toDate()
				dataPoints.push({
					date: soberTime,
					bac: 0
				});
				drivingLimitPoints.push({
					date: soberTime,
					bac: drivingLimit
				});

				$scope.bacChart = {
					data: [
						{ key: 'Blood Alcohol', values: dataPoints },
						{ key: 'Driving limit', values: drivingLimitPoints }
					],
					options: {
						chart: {
							type: 'lineChart',
							height: 200,
							margin: {
								top: 0,
								right: 20,
								bottom: 20,
								left: 20
							},
							color: ['rgb(31, 119, 180)', 'rgba(255,0,0,0.4)'],
							useInteractiveGuideline: true,
							x: function(d){ return d.date; },
							y: function(d){ return d.bac; },
							padData: false,
							noData: 'Nothing here!',
							forceY: [0, 0.1, 0.2],
							xScale: d3.time.scale(),
							pointShape: 'circle',
							yAxis: {
								tickFormat: d3.format('.3f')
							},
							interpolate: 'basis',
							showYAxis: false,
							xAxis: {
								tickFormat: function(d) {
									if (moment(d).isSame($scope.startDate)) return 'kick-off';
									if (moment(d).isSame(soberTime)) return 'sober';
									return d3.time.format('%H:%M')(new Date(d));
								}
							}
						}
					}
				};
			}

			var monitor = $interval(updateStats, 1000 * 60);

			$scope.$on('$destroy', function() {
				if (angular.isDefined(monitor)) {
					$interval.cancel(monitor);
					monitor = undefined;
				}

				$scope.addDrinkModal && $scope.addDrinkModal.remove();
				$scope.drinkInfoModal && $scope.drinkInfoModal.remove();
			});
		});
}(angular));