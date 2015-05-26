/**
 * Created by Stephen on 18/05/2015.
 */
(function(angular) {
	angular.module('drinkup.home', [
		'ionic',
		'drinkup.data.sessionRepository'
	])

		.controller('HomeCtrl', function ($scope, $state, $location, $ionicModal, sessionRepository) {

			//reload the data if changing to home
			$scope.$on('$stateChangeSuccess', function(event, toState) {
				if (toState.name === 'app.home') {
					load();
				}
			});

			$ionicModal.fromTemplateUrl('js/home/disclaimer.html', {
				scope: $scope
			}).then(function(disclaimer) {
				$scope.disclaimerModal = disclaimer;
				if (!localStorage.getItem('disclaimer')) {
					disclaimer.show();
				}
			});

			$scope.acceptDisclaimer = function(goToProfile) {
				localStorage.setItem('disclaimer', true);
				$scope.disclaimerModal.hide();
				goToProfile && $state.go('app.profile');
			};

			function load() {
				sessionRepository.getAllSessions()
					.then(function (sessions) {
						$scope.sessions = sessions;
					});
			}

			$scope.startSession = function() {
				sessionRepository.addSession()
					.then(function(session) {
						$location.path('app/session/' + session.id);
					});

				load();
			};

			$scope.$on('$destroy', function() {
				$scope.disclaimerModal && $scope.disclaimerModal.remove();
			});
		});
}(angular));