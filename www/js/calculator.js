/**
 * Created by Stephen on 21/05/2015.
 */

(function(angular) {
	angular.module('drinkup.calculator', [])

		.constant('genderConstants', {
			male: 0.68,
			female: 0.55
		})

		.factory('calculator',function(moment, genderConstants) {
			return {
				/**
				 * Calculates blood alcohol level at the specified time
				 * @param profile
				 * @param timeSinceFirstDrink
				 * @param units
				 * @returns {number}
				 */
				calculateBloodAlcohol: function(profile, timeSinceFirstDrink, units) {
					//http://www.wikihow.com/Calculate-Blood-Alcohol-Content-%28Widmark-Formula%29
					var alcoholConsumed = units * 0.06;
					var bloodSGCompensation = alcoholConsumed * 100 * 1.055;
					var weightInLbs = profile.weight * 2.20462;

					var bac = bloodSGCompensation / (weightInLbs * genderConstants[profile.gender]);

					var alcoholMetabolised = moment.duration(timeSinceFirstDrink).as('hours') * 0.015;

					var result = bac - alcoholMetabolised;

					return result < 0 ? 0 : result;
				}
			};
		});
}(angular));