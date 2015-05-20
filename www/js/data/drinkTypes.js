/**
 * Created by Stephen on 20/05/2015.
 */
/**
 * Created by Stephen on 18/05/2015.
 */
(function(angular) {
	angular.module('drinkup.data.drinkTypes', [])

		.constant('drinkTypes', [
			{ id: 1, name: 'Stella', category: 'Lager' },
			{ id: 2, name: 'Becks', category: 'Lager' },
			{ id: 3, name: 'Rebellion Red', category: 'Ale' },
			{ id: 4, name: 'White wine', category: 'Wine' }
		]);
}(angular));