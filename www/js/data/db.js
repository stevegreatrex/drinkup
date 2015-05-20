/**
 * Created by Stephen on 18/05/2015.
 */
(function(angular) {
	angular.module('drinkup.data.db', [
		'indexedDB'
	])

		.config(function($indexedDBProvider) {
			$indexedDBProvider
				.connection('drinkup')
				.upgradeDatabase(1, function(event, db, transaction) {
					var sessions = db.createObjectStore('session', { keyPath: 'id' });
				});
		});
}(angular));