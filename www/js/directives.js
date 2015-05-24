(function(angular) {
	angular.module('drinkup.directives', [])

		.directive('imgRepeat', function() {
			return {
				restrict: 'E',
				scope: {
					src: '@',
					count: '=',
					size: '@',
					height: '@'
				},
				controller: function($scope) {
					$scope.height = $scope.height || $scope.size;

					function update(count) {
						$scope.images = [];
						if (!count) return;

						for	(var i = 0; i < Math.floor(count); i++) {
							$scope.images.push({ size: $scope.size });
						}
						var remainder = count - Math.floor(count);
						if (remainder) {
							$scope.images.push({ size: $scope.size * remainder });
						}
					}
					$scope.$watch('count', update);
					update($scope.count);
				},
				template: '<div style="display:inline-block;background-image: url({{src}}); background-size:{{size}}px {{height}}px;height:{{height}}px;width:{{image.size}}px;margin-right:5px;" ng-repeat="image in images">'
			}
		});
}(angular));
