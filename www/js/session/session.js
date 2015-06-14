(function (angular) {
	angular.module('drinkup.session', [
		'ionic',
		'drinkup.data.sessionRepository',
		'drinkup.data.drinkTypes'
	])

		.controller('SessionCtrl', function ($scope,
																				 $rootScope,
																				 $stateParams,
																				 $interval,
																				 $timeout,
																				 $ionicModal,
																				 moment,
																				 sessionRepository,
																				 sessionLevels,
																				 calculator,
																				 drinkupUtils,
																				 profile,
																				 ProfileEvents,
																				 SessionEvents,
																				 drinkTypes,
																				 drinkCategories,
																				 drivingLimit,
																				 bottleCapCalculator) {

			$scope.drinkCategories = drinkCategories;

			$ionicModal.fromTemplateUrl('js/session/add-drink.html', {
				scope:     $scope,
				animation: 'slide-in-up'
			}).then(function (modal) {
				$scope.addDrinkModal = modal;
			});

			$ionicModal.fromTemplateUrl('js/session/drink-info.html', {
				scope:     $scope,
				animation: 'slide-in-up'
			}).then(function (modal) {
				$scope.drinkInfoModal = modal;
			});

			$ionicModal.fromTemplateUrl('js/session/bottle-cap.html', {
				scope:     $scope,
				animation: 'slide-in-up'
			}).then(function (modal) {
				$scope.bottleCapModal = modal;
			});

			sessionRepository.getSession($stateParams.sessionId)
				.then(function (session) {
					$scope.session     = session;
					$scope.description = session.description;
					$scope.drinks      = session.drinks;
					$scope.bottleCaps  = session.bottleCaps || [];

					$scope.startDate = session.drinks.length ?
						moment(session.drinks[session.drinks.length - 1].date) : moment(session.startDate);
					updateStats();
				});

			$scope.searchDrinks = function (query) {
				return drinkTypes.filter(function (drink) {
					return drink.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
				});
			};

			$scope.newDrink = {};

			$scope.showAddDrinkModal = function () {
				$scope.newDrink = {};
				$scope.addDrinkModal.show()
			};

			$scope.$watch('newDrink.type', function (drinkType) {
				$scope.newDrink.serving = drinkType ? drinkCategories[drinkType.category].servings[0] : null;
			});

			$scope.addDrink = function (drinkType, serving) {
				$scope.addDrinkModal.hide();
				$scope.drinkInfoModal.hide();
				if (!drinkType || !serving) {
					return;
				}

				$scope.addingDrink = true;
				sessionRepository.addDrink($scope.session.id, drinkType, serving)
					.then(function (drink) {
						$scope.drinks.unshift(drink);
						$scope.session.totalUnits += drink.units;
						$scope.session.totalCal += drink.cal;
						updateStats();
						$scope.addingDrink = false;
					});
			};

			$scope.sameAgain = function () {
				if (!$scope.drinks.length) return;
				$scope.addDrink($scope.drinks[0].drinkType, $scope.drinks[0].serving);
			};

			$scope.cancelAddDrinkModal = function () {
				$scope.newDrink.type    = null;
				$scope.newDrink.serving = null;
				$scope.addDrinkModal.hide()
			};

			$scope.showDrinkInfoModal = function (drink) {
				$scope.selectedDrink = drink;
				$scope.mapLocation   = null;
				$scope.drinkInfoModal.show()
					.then(function () {
						//delay loading the map by a half second to let any animations finish
						$timeout(function () {
							$scope.mapLocation = drink.location;
						}, 500);
					});
			};

			var pendingBottleCaps     = [];
			$scope.showBottleCapModal = function (bottleCap) {
				if (!$scope.bottleCapModal.isShown()) {
					$scope.selectedBottleCap = bottleCap;
					$scope.bottleCapModal.show();
				} else {
					pendingBottleCaps.push(bottleCap);
				}
			};

			$scope.closeBottleCapModal = function () {
				$scope.bottleCapModal.hide().then(function () {
					if (pendingBottleCaps.length) {
						$scope.showBottleCapModal(pendingBottleCaps.pop());
					}
				});
			};

			$scope.deleteDrink = function (drink) {
				if (!drink) return;
				$scope.drinkInfoModal.hide();
				sessionRepository.deleteDrink($scope.session.id, drink.id)
					.then(function () {
						$scope.drinks.splice($scope.drinks.indexOf(drink), 1);
						$scope.session.totalUnits = 0 + $scope.session.totalUnits - drink.units;
						$scope.session.totalCal   = 0 + $scope.session.totalCal - drink.cal;
						updateStats();
					});
			};

			function updateStats() {

				var drinkingTime = moment.duration(moment().diff($scope.startDate));

				$scope.totalUnits   = $scope.session.totalUnits;
				$scope.totalCal     = $scope.session.totalCal;
				$scope.description  = sessionLevels.getLevel($scope.session.totalUnits);
				$scope.totalDrinks  = $scope.drinks.length;
				$scope.bloodAlcohol = calculator.calculateBloodAlcohol(profile, drinkingTime, $scope.totalUnits);

				$scope.burgers = $scope.totalCal / 563; //563 calories in a big mac
				updateChart();
			}

			function updateChart() {
				var dataPoints         = [];
				var drivingLimitPoints = [
					{
						date: $scope.startDate.toDate(),
						bac:  drivingLimit
					}
				];

				var totalUnits = 0;
				dataPoints.push({
					date: $scope.startDate.toDate(),
					bac:  totalUnits
				});


				var maxBac = 0.2;
				for (var i = $scope.drinks.length - 1; i >= 0; i--) {
					var drink        = $scope.drinks[i];
					var drinkTime    = moment(drink.date);
					var drinkingTime = moment.duration(drinkTime.diff($scope.startDate));
					totalUnits += drink.units;
					var bac          = calculator.calculateBloodAlcohol(profile, drinkingTime, totalUnits);
					if (bac > maxBac) maxBac = bac;

					dataPoints.push({
						date: drinkTime.toDate(),
						bac:  bac
					});
				}

				var lastDrink      = dataPoints[dataPoints.length - 1];
				$scope.soberTime   = moment(lastDrink.date).add(calculator.timeUntilSober(lastDrink.bac));
				$scope.drivingTime = moment(lastDrink.date).add(calculator.timeUntilLegal(lastDrink.bac));
				dataPoints.push({
					date: $scope.soberTime.toDate(),
					bac:  0
				});
				drivingLimitPoints.push({
					date: $scope.soberTime.toDate(),
					bac:  drivingLimit
				});

				var data = [
					{ key: 'Blood Alcohol', values: dataPoints },
					{ key: 'Driving limit', values: drivingLimitPoints }
				];

				if (moment().isBefore($scope.soberTime)) {
					data.push({
						key: 'Now', values: [
							{ date: moment(), bac: 0 },
							{ date: moment(), bac: maxBac }
						]
					});
				}

				$scope.bacChart = {
					data:    data,
					options: {
						chart: {
							type:                    'lineChart',
							height:                  200,
							margin:                  {
								top:    0,
								right:  40,
								bottom: 20,
								left:   30
							},
							color:                   ['rgb(31, 119, 180)', 'rgba(255,0,0,0.4)', '#999'],
							useInteractiveGuideline: true,
							x:                       function (d) {
								return d.date;
							},
							y:                       function (d) {
								return d.bac;
							},
							padData:                 false,
							noData:                  'Nothing here!',
							forceY:                  [0, 0.1, 0.2],
							xScale:                  d3.time.scale(),
							pointShape:              'circle',
							yAxis:                   {
								tickFormat: d3.format('.3f')
							},
							interpolate:             'basis',
							showYAxis:               false,
							xAxis:                   {
								tickFormat: function (d) {
									var dMoment = moment(d);
									if (dMoment.isSame($scope.startDate)) return 'kick-off';
									if (dMoment.isSame($scope.soberTime)) return 'sober ' + d3.time.format('%H:%M')(new Date(d));
									if (dMoment.hours() === 0 && dMoment.minutes() === 0) return dMoment.format('ddd Do');
									return d3.time.format('%H:%M')(new Date(d));
								}
							}
						}
					}
				};
			}

			var monitor = $interval(updateStats, 1000 * 60);

			$scope.$on('$destroy', function () {
				if (angular.isDefined(monitor)) {
					$interval.cancel(monitor);
					monitor = undefined;
				}

				$scope.addDrinkModal && $scope.addDrinkModal.remove();
				$scope.drinkInfoModal && $scope.drinkInfoModal.remove();
				$scope.bottleCapModal && $scope.bottleCapModal.remove();
			});

			$rootScope.$on(ProfileEvents.updated, function (event, p) {
				profile = p;
				updateStats();
			});

			$rootScope.$on(SessionEvents.bottleCapAdded, function (event, session, bottleCap) {
				if (session.id !== $scope.session.id) return;

				$scope.bottleCaps.push(bottleCap);
				$scope.showBottleCapModal(bottleCap);
			});
		});
}(angular));