(function(angular) {
	angular.module('drinkup.bottleCapCalculator', [
		'drinkup.data.bottleCapDefinitions'
	])

		.factory('BottleCapCalculator', function($rootScope, SessionEvents) {
			function BottleCapCalculator() {
				this._bottleCapDefinitions = [];
			}

			BottleCapCalculator.prototype.getBottleCaps = function(session) {
				var bottleCaps = [];
				this._bottleCapDefinitions.forEach(function(definition) {
					if (definition.matches(session)) {
						bottleCaps.push(angular.extend({}, definition, { matches: null }));
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

			BottleCapCalculator.prototype.addDefinitions = function(definition) {
				if(angular.isArray(definition)) {
					this._bottleCapDefinitions = this._bottleCapDefinitions.concat(definition);
				} else {
					this._bottleCapDefinitions.push(definition);
				}
			};

			return BottleCapCalculator;
		})

		.service('bottleCapCalculator', function($rootScope, BottleCapCalculator, SessionEvents, bottleCapDefinitions) {
			var calculator = new BottleCapCalculator();
			calculator.addDefinitions(bottleCapDefinitions);

			$rootScope.$on(SessionEvents.drinkAdded, function(event, session) {
				calculator.applyBottleCaps(session);
			});

			return calculator;
		});
}(angular));
