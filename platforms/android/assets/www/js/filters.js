(function(angular) {
	angular.module('drinkup.filters', [])

		.filter('reverse', function() {
			return function (items) {
				if (!items) { return items; }
				return items.slice().reverse();
			}
		});
}(angular));
