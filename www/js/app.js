// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
(function(angular) { 'use strict';
  angular.module('drinkup', [
		'ionic',
		'indexedDB',
		'angularMoment',
		'nvd3',
		'ion-autocomplete',

		'drinkup.data.db',
		'drinkup.data.drinkTypes',
		'drinkup.data.sessionRepository',
		'drinkup.data.sessionLevels',
		'drinkup.data.profileRepository',
		'drinkup.server',
		'drinkup.utils',
		'drinkup.calculator',

		'drinkup.menu',
		'drinkup.home',
		'drinkup.session',
		'drinkup.profile'
	])

    .run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    })

		.config(function($stateProvider, $urlRouterProvider) {
			$stateProvider

				.state('app', {
					url: '/app',
					abstract: true,
					templateUrl: 'js/menu/menu.html',
					controller: 'MenuCtrl'
				})

				.state('app.home', {
					url: '/home',
					views: {
						content: {
							templateUrl: 'js/home/home.html',
							controller: 'HomeCtrl'
						}
					}
				})

				.state('app.profile', {
					url: '/profile',
					views: {
						content: {
							templateUrl: 'js/profile/profile.html',
							controller: 'ProfileCtrl'
						}
					}
				})

				.state('app.session', {
					url: '/session/:sessionId',
					views: {
						content: {
							templateUrl: 'js/session/session.html',
							controller: 'SessionCtrl'
						}
					}
				})
			;

			// if none of the above states are matched, use this as the fallback
			$urlRouterProvider.otherwise('/app/home');
		});
}(angular));
