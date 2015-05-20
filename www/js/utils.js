/**
 * Created by Stephen on 20/05/2015.
 */
/**
 * Created by Stephen on 18/05/2015.
 */
(function(angular) {
	angular.module('drinkup.utils', [])

		.factory('utils', function($q, $indexedDB, moment) {
			return {
				createGuid: function() {
					return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
						var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
						return v.toString(16);
					});
				}
			};
		});
}(angular));