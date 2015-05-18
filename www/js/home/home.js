/**
 * Created by Stephen on 18/05/2015.
 */
(function(angular) {
	angular.module('drinkup.home', [
		'ionic'
	])

		.controller('HomeCtrl', ['$scope', function ($scope) {
			$scope.message = 'Go Drinking!';
		}]);
}(angular));