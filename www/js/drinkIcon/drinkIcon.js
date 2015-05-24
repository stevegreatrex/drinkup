
(function(angular) {
	angular.module('drinkup.directives.drinkIcon', [])
		.directive('drinkIcon', function() {
			return {
				restrict: 'E',
				scope: {
					drinkType: '=drinkType'
				},
				templateUrl: 'js/drinkIcon/drinkIcon.html'
			}
		});
}(angular));