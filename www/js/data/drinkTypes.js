/**
 * Created by Stephen on 20/05/2015.
 */
/**
 * Created by Stephen on 18/05/2015.
 */
(function(angular) {
	angular.module('drinkup.data.drinkTypes', [])

		.constant('drinkTypes', [
			{ id: 1, name: 'Pint of lager', units: 2 },
			{ id: 2, name: 'Small glass of wine', units: 2 }
		]);
}(angular));