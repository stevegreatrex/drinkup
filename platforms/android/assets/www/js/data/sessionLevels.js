
(function(angular) {
	angular.module('drinkup.data.sessionLevels', [])

		.constant('_sessionLevels', [
			{ units: 30, description: 'Death by Alcohol' },
			{ units: 20, description: 'Epic Session' },
			{ units: 12, description: 'Heavy Drink' },
			{ units: 6, description: 'Drinking Session' },
			{ units: 2, description: 'Social Drink' },
			{ units: 0, description: 'Warm Up' }
		])

		.factory('sessionLevels',function(_sessionLevels) {
			return {
				getLevel: function(units) {
					units = units || 0;
					var level = _sessionLevels
						.filter(function(level) {
							return units >= level.units;
						})[0];

					return level.description;
				}
			}
		});
}(angular));