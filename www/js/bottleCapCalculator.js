(function(angular) {
	angular.module('drinkup.bottleCapCalculator', [])

		.factory('BottleCapCalculator', function($rootScope, SessionEvents) {
			function BottleCapCalculator() {}

			BottleCapCalculator._bottleCapDefinitions = [];

			BottleCapCalculator.addBottleCap = function(bottleCapGenerator) {
				BottleCapCalculator._bottleCapDefinitions.push(bottleCapGenerator);
			};

			BottleCapCalculator.prototype.getBottleCaps = function(session) {
				var bottleCaps = [];
				BottleCapCalculator._bottleCapDefinitions.forEach(function(generator) {
					var generatedBottleCaps = generator(session);
					if (!generatedBottleCaps) return;
					if (angular.isArray(generatedBottleCaps)) {
						bottleCaps = bottleCaps.concat(generatedBottleCaps);
					} else {
						bottleCaps.push(generatedBottleCaps);
					}
				});

				return bottleCaps;
			};

			BottleCapCalculator.prototype.applyBottleCaps = function(session) {
				var bottleCaps = this.getBottleCaps(session) || [];
				session.bottleCaps = session.bottleCaps || [];
				bottleCaps.forEach(function(bottleCap) {
					if (session.bottleCaps.filter(function(b) { return b.id == bottleCap.id; }).length)
						return;

					session.bottleCaps.push(bottleCap);
					$rootScope.$broadcast(SessionEvents.bottleCapAdded, session, bottleCap);
				});
			};

			BottleCapCalculator._bottleCapDefinitions.push(function(session) {
				if (session.drinks.filter(function(d) { return d.drinkType.category === 'beer'; }).length) {
					return {
						id: 'beer-1',
						name: 'Keg Tapper',
						description: 'Have a beer!',
						level: 1
					};
				}
			});

			BottleCapCalculator._bottleCapDefinitions.push(function(session) {
				if (session.drinks.filter(function(d) { return d.drinkType.category === 'wine'; }).length) {
					return {
						id: 'wine-1',
						name: 'Grape Expectations',
						description: 'Have some wine!',
						level: 1
					};
				}
			});

			BottleCapCalculator._bottleCapDefinitions.push(function(session) {
				if (session.drinks.filter(function(d) { return d.drinkType.category === 'shot'; }).length) {
					return {
						id: 'shot-1',
						name: 'Straight Shooter',
						description: 'Have a shot!',
						level: 1
					};
				}
			});

			return BottleCapCalculator;
		})

		.service('bottleCapCalculator', function($rootScope, BottleCapCalculator, SessionEvents) {
			var calculator = new BottleCapCalculator();

			$rootScope.$on(SessionEvents.drinkAdded, function(event, session) {
				calculator.applyBottleCaps(session);
			});

			return calculator;
		});
}(angular));
