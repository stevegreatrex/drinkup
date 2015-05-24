
(function(angular) {
	angular.module('drinkup.profile', [
		'ionic',
		'drinkup.data.profileRepository'
	])

		.controller('ProfileCtrl', function ($scope, profileRepository) {
			$scope.profile = profileRepository.get();

			$scope.save = function() {
				profileRepository.save($scope.profile);
				$scope.profileForm.$setPristine();
			}
		});
}(angular));