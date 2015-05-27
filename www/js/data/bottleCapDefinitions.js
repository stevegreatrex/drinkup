(function(angular) {
	angular.module('drinkup.data.bottleCapDefinitions', [])

		.factory('bottleCapDefinitions', function(moment, profile, calculator) {
			var definitions = [
				{
					id: 'beer-1',
					name: 'Keg Tapper',
					description: 'Have a beer!',
					level: 1,
					matches: function(session) {
						return session.drinks.filter(function(d) { return d.drinkType.category === 'beer'; }).length;
					}
				},

				{
					id: 'wine-1',
					name: 'Grape Expectations',
					description: 'Have some wine!',
					level: 1,
					matches: function(session) {
						return session.drinks.filter(function(d) { return d.drinkType.category === 'wine'; }).length;
					}
				},

				{
					id: 'shot-1',
					name: 'Straight Shooter',
					description: 'Have a shot!',
					level: 1,
					matches: function(session) {
						return session.drinks.filter(function(d) { return d.drinkType.category === 'shot'; }).length;
					}
				},

				{
					id: 'mix-1',
					name: 'Mixing it up',
					description: 'Have 2 types of drink in the same session',
					level: 2,
					matches: function(session) {
						var categories = {};
						session.drinks.forEach(function(d) {
							categories[d.drinkType.category] = true;
						});
						return Object.keys(categories).length > 1;
					}
				},

				{
					id: 'bac-1',
					name: 'Replacing my blood',
					description: 'Hit a peak blood alcohol content of 0.2',
					level: 3,
					matches: function(session) {
						var drinkingTime = moment().diff(session.startDate);
						var bac = calculator.calculateBloodAlcohol(profile, drinkingTime, session.totalUnits);
						return bac >= 0.2;
					}
				}
			];

			return definitions;
		});
}(angular));
