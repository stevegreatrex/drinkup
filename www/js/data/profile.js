/**
 * Created by Stephen on 21/05/2015.
 */

(function(angular) {
	angular.module('drinkup.data.profile', [])

		.factory('profile',function() {
			//hard coded for now
			return {
				height: 180,
				weight: 76,
				gender: 'male'
			};
		});
}(angular));