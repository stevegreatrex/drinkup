/**
 * Created by Stephen on 20/05/2015.
 */
/**
 * Created by Stephen on 18/05/2015.
 */
(function(angular) {
	angular.module('drinkup.utils', [])

		.factory('drinkupUtils', function($q, $indexedDB, moment) {
			var utils = {
				createGuid: function() {
					return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
						var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
						return v.toString(16);
					});
				},

				sortByReverseDate: function(array, dateKey) {
					array.sort(function(a,b) {
						var aStart = moment(a[dateKey]);
						var bStart = moment(b[dateKey]);
						return aStart.isBefore(bStart) ? 1 : -1;
					});
					return array;
				},

				/**
				 * Rounds number to the specified number of decimal places
				 * @param number
				 * @param decimalPlaces
				 */
				round: function(number, decimalPlaces) {
					var multiplier = Math.pow(10, decimalPlaces);
					return Math.round(number * multiplier) / multiplier;
				},

				/**
				 * Rounds number to the specified number of decimal places and displays it as
				 * a string
				 * @param number
				 * @param decimalPlaces
				 */
				roundToPaddedString: function(number, decimalPlaces) {
					var value = '' + utils.round(number, decimalPlaces);
					var afterPoint = value.match(/\d+\.(\d+)/);
					var displayPlaces = afterPoint ? afterPoint[0].length : 0;

					if (!afterPoint) { value += '.'; }

					while (displayPlaces < decimalPlaces) {
						value += '0';
						decimalPlaces--;
					}

					return value;
				}
			};

			return utils;
		});
}(angular));