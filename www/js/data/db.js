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
					db.createObjectStore('session', { keyPath: 'id' });
				})
				.upgradeDatabase(2, function(event, db, transaction) {
					var drinks = db.createObjectStore('drink', { keyPath: 'id' });
					drinks.createIndex('sessionId', 'sessionId', { unique: false });
				});
		});
}(angular));