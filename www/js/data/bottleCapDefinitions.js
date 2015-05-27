(function(angular) {
	angular.module('drinkup.data.bottleCapDefinitions', [])

		.constant('genderCalorieConstants', {
			male: 2400,
			female: 2000
		})

		.factory('bottleCapDefinitions', function(moment, genderCalorieConstants, profile, calculator) {
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
					name: 'Mix It Up',
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
					id: 'cal-1',
					name: 'Liquid Lunch',
					description: 'Have 1/3rd of recommended daily calorie in drinks',
					level: 2,
					matches: function(session) {
						return session.totalCal >= (genderCalorieConstants[profile.gender] / 3);
					}
				},

				{
					id: 'cal-2',
					name: 'Drink Yourself Slim',
					description: 'Have all of your recommended daily calories in drinks',
					level: 3,
					matches: function(session) {
						return session.totalCal >= genderCalorieConstants[profile.gender];
					}
				},

				{
					id: 'bac-1',
					name: 'Replacing My Blood',
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
