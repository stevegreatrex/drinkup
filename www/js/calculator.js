/**
 * Created by Stephen on 21/05/2015.
 */

(function (angular) {
	angular.module('drinkup.calculator', [])

		.constant('genderConstants', {
			male:   0.58,
			female: 0.49
		})

		.constant('drivingLimit', 0.08)
		.constant('metabolisedPerHour', 0.016)

		.factory('calculator', function (moment, genderConstants, drivingLimit, metabolisedPerHour) {
			return {
				/**
				 * Calculates blood alcohol level at the specified time
				 * @param profile
				 * @param timeSinceFirstDrink
				 * @param units
				 * @returns {number}
				 */
				calculateBloodAlcohol: function (profile, timeSinceFirstDrink, units) {
					//http://en.wikipedia.org/wiki/Blood_alcohol_content#Estimated_blood_ethanol_concentration_.28EBAC.29
					var alcoholConsumed    = units * 0.806 * 1.2;
					var bac                = alcoholConsumed / (profile.weight * genderConstants[profile.gender]);
					var alcoholMetabolised = moment.duration(timeSinceFirstDrink).as('hours') * metabolisedPerHour;
					var result             = bac - alcoholMetabolised;

					return result < 0 ? 0 : result;
				},

				/**
				 * Calculated the amount of time until blood alcohol reaches zero
				 * @param currentBac Current blood alcohol level
				 * @returns {moment}
				 */
				timeUntilSober: function (currentBac) {
					return moment.duration(currentBac / metabolisedPerHour, 'hours');
				},

				/**
				 * Calculated the amount of time until blood alcohol reaches the
				 * legal limit to drive
				 * @param currentBac Current blood alcohol level
				 * @returns {moment}
				 */
				timeUntilLegal: function (currentBac) {
					return moment.duration((currentBac - drivingLimit) / metabolisedPerHour, 'hours');
				}
			};
		});
}(angular));