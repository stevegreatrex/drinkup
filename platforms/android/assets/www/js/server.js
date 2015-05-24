/**
 * Created by Stephen on 18/05/2015.
 */
(function(angular) {
	angular.module('drinkup.server', [])

		.factory('serverClient', function() {
			var client = new WindowsAzure.MobileServiceClient(
				'https://drinkup.azure-mobile.net/',
				'cPGRlDPUWSTeohEPciBuipoHrZYEWI78'
			);

			return client;
		})

		.factory('serverApi', function($q, serverClient) {
			function ApiClient() {

			}

			//ApiClient.prototype.getDrinkTypes = function() {
			//	return serverClient
			//		.getTable('drinktype')
			//		.read()
			//		.then(function(drinkTypes) {
			//			return drinkTypes;
			//		});
			//};

			return new ApiClient();
		});
}(angular));