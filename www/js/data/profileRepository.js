/**
 * Created by Stephen on 21/05/2015.
 */

(function(angular) {
	angular.module('drinkup.data.profileRepository', [])

		.constant('ProfileEvents', {
			updated: 'updated'
		})

		.factory('profileRepository', function($rootScope, ProfileEvents) {
			function ProfileRepository() {

			}

			ProfileRepository.defaultProfile = {
				weight: 75,
				name: '',
				gender: 'male'
			};

			ProfileRepository.storageKey = 'profile';

			/**
			 * Retrieve the profile data from storage
			 * @returns {*}
			 */
			ProfileRepository.prototype.get = function() {
				var profile = localStorage.getItem(ProfileRepository.storageKey);
				if (!profile) {
					return this.save(ProfileRepository.defaultProfile);
				}

				return JSON.parse(profile);
			};

			/**
			 * Save the profile data to storage
			 * @param profile
			 * @returns {*}
			 */
			ProfileRepository.prototype.save = function(profile) {
				localStorage.setItem(ProfileRepository.storageKey, JSON.stringify(profile));
				$rootScope.$broadcast(ProfileEvents.updated, profile);
				return profile;
			};

			return new ProfileRepository();
		})

		.factory('profile',function(profileRepository) {
			return profileRepository.get();
		});
}(angular));