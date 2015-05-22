/**
 * Created by Stephen on 20/05/2015.
 */
/**
 * Created by Stephen on 18/05/2015.
 */
(function(angular) {
	angular.module('drinkup.data.drinkTypes', [])

		.constant('drinkCategories', {
			beer: {
				servings: [
					{ name: 'Pint', ml: 568 },
					{ name: 'Half Pint', ml: 284 },
					{ name: '500ml', ml: 500 },
					{ name: '440ml', ml: 440 },
					{ name: '400ml', ml: 400 },
					{ name: '330ml', ml: 330 },
					{ name: '300ml', ml: 300 },
					{ name: '200ml', ml: 200 }
				]
			},
			wine: {
				servings: [
					{ name: 'Large Glass', ml: 250 },
					{ name: 'Small Glass', ml: 125 },
					{ name: '250ml', ml: 250 },
					{ name: '125ml', ml: 125 }
				]
			},
			shot: {
				servings: [
					{ name: 'Double', ml: 50 },
					{ name: 'Single', ml: 25 }
				]
			},
			cocktail: {
				servings: [
					{ name: 'One Drink', ml: 170 }
				]
			},
			other: {
				servings: [
					{ name: '500ml', ml: 500 },
					{ name: '400ml', ml: 400 },
					{ name: '300ml', ml: 300 },
					{ name: '200ml', ml: 200 },
					{ name: '100ml', ml: 100 },
					{ name: '50ml', ml: 50 }
				]
			}
		})

		.constant('drinkTypes', [
			{
				name: '1554 Enlightened Black Ale',
				abv: 5.6,
				category: 'beer',
				calPerMl: 0.5807185763798836,
				id: 1
			},
			{
				name: '1910 Rye Whisky',
				abv: 40,
				category: 'shot',
				calPerMl: 2.275947551872675,
				id: 2
			},
			{
				name: 'Abbots Lager',
				abv: 4.5,
				category: 'beer',
				calPerMl: 0.38421279548366033,
				id: 3
			},
			{
				name: 'Absinthe',
				abv: 50,
				category: 'shot',
				calPerMl: 3.636823407631594,
				id: 4
			},
			{
				name: 'Absolut Vodka',
				abv: 40,
				category: 'shot',
				calPerMl: 2.2524841750492453,
				id: 5
			},
			{
				name: 'Addlestones Cider',
				abv: 5,
				category: 'beer',
				calPerMl: 0.3548835744543733,
				id: 6
			},
			{
				name: 'Aguila',
				abv: 3.9,
				category: 'beer',
				calPerMl: 0.38714571758658906,
				id: 7
			},
			{
				name: 'Alaskan Amber',
				abv: 5.3,
				category: 'beer',
				calPerMl: 0.5132613680125233,
				id: 8
			},
			{
				name: 'Alaskan IPA',
				abv: 6.2,
				category: 'beer',
				calPerMl: 0.5220601343213095,
				id: 9
			},
			{
				name: 'Alaskan Pale',
				abv: 5.2,
				category: 'beer',
				calPerMl: 0.4399383154393057,
				id: 10
			},
			{
				name: 'Alcohol Inspired Refresher (AIR)',
				abv: 4,
				category: 'beer',
				calPerMl: 0.278627599778227,
				id: 11
			},
			{
				name: 'AleSmith Anvil ESB',
				abv: 5.5,
				category: 'beer',
				calPerMl: 0.5279259785271668,
				id: 12
			},
			{
				name: 'AleSmith IPA',
				abv: 7.25,
				category: 'beer',
				calPerMl: 0.615913641615028,
				id: 13
			},
			{
				name: 'AleSmith Old Numbskull',
				abv: 11,
				category: 'beer',
				calPerMl: 0.9092058519078985,
				id: 14
			},
			{
				name: 'AleSmith Speedway Stout',
				abv: 12,
				category: 'beer',
				calPerMl: 0.9678642939664726,
				id: 15
			},
			{
				name: 'AleSmith X',
				abv: 5.25,
				category: 'beer',
				calPerMl: 0.4399383154393057,
				id: 16
			},
			{
				name: 'Alexander Keiths Brown Ale',
				abv: 5.4,
				category: 'beer',
				calPerMl: 0.5220601343213095,
				id: 17
			},
			{
				name: 'Alexander Keiths Lager',
				abv: 5.4,
				category: 'beer',
				calPerMl: 0.4927309132920224,
				id: 18
			},
			{
				name: 'Alexander Keiths Pale Ale',
				abv: 5.4,
				category: 'beer',
				calPerMl: 0.4663346143656641,
				id: 19
			},
			{
				name: 'Amstel Light',
				abv: 3.5,
				category: 'beer',
				calPerMl: 0.278627599778227,
				id: 20
			},
			{
				name: 'Anchor Porter',
				abv: 5.6,
				category: 'beer',
				calPerMl: 0.6129807195120993,
				id: 21
			},
			{
				name: 'Anchor Steam',
				abv: 4.9,
				category: 'beer',
				calPerMl: 0.44873708174809185,
				id: 22
			},
			{
				name: 'Angry Orchard Traditional Dry Cider',
				abv: 5.5,
				category: 'beer',
				calPerMl: 0.557255199556454,
				id: 23
			},
			{
				name: 'Arbor Mist White Zinfandel Exotic Fruit',
				abv: 6,
				category: 'wine',
				calPerMl: 0.7390963699380336,
				id: 24
			},
			{
				name: 'Asahi Black',
				abv: 5.3,
				category: 'beer',
				calPerMl: 0.48979799118909373,
				id: 25
			},
			{
				name: 'Asahi Super Dry',
				abv: 4.9,
				category: 'beer',
				calPerMl: 0.437005393336377,
				id: 26
			},
			{
				name: 'Bacardi 151 Rum',
				abv: 75.5,
				category: 'shot',
				calPerMl: 4.293797958687624,
				id: 27
			},
			{
				name: 'Bacardi Gold Rum',
				abv: 40,
				category: 'shot',
				calPerMl: 2.2994109286961044,
				id: 28
			},
			{
				name: 'Bacardi Light Mojito',
				abv: 12.5,
				category: 'beer',
				calPerMl: 0.8153523446141799,
				id: 29
			},
			{
				name: 'Bacardi Light Pina Colada',
				abv: 11.5,
				category: 'beer',
				calPerMl: 0.8153523446141799,
				id: 30
			},
			{
				name: 'Bacardi Silver 03',
				abv: 5,
				category: 'beer',
				calPerMl: 0.7039013047028891,
				id: 31
			},
			{
				name: 'Bacardi Silver Mojito',
				abv: 5,
				category: 'beer',
				calPerMl: 0.6716391615706734,
				id: 32
			},
			{
				name: 'Bacardi Silver Peach',
				abv: 5,
				category: 'beer',
				calPerMl: 0.7039013047028891,
				id: 33
			},
			{
				name: 'Bailys Irish Cream',
				abv: 17,
				category: 'shot',
				calPerMl: 3.378726262573868,
				id: 34
			},
			{
				name: 'Ballarat Bitter',
				abv: 4.6,
				category: 'beer',
				calPerMl: 0.3959444838953752,
				id: 35
			},
			{
				name: 'Bards Original Sorghum Malt Beer',
				abv: 4.6,
				category: 'beer',
				calPerMl: 0.45460292595394924,
				id: 36
			},
			{
				name: 'Bass',
				abv: 5.1,
				category: 'beer',
				calPerMl: 0.45753584805687797,
				id: 37
			},
			{
				name: 'Batch 19',
				abv: 5.5,
				category: 'beer',
				calPerMl: 0.5044626017037372,
				id: 38
			},
			{
				name: 'Becherovka',
				abv: 38,
				category: 'shot',
				calPerMl: 3.0267756102224235,
				id: 39
			},
			{
				name: 'Becks Dark',
				abv: 5,
				category: 'beer',
				calPerMl: 0.4164749386158761,
				id: 40
			},
			{
				name: 'Becks Octoberfest',
				abv: 5.2,
				category: 'beer',
				calPerMl: 0.3959444838953752,
				id: 41
			},
			{
				name: 'Becks Premier Light',
				abv: 2.3,
				category: 'beer',
				calPerMl: 0.1877070145874371,
				id: 42
			},
			{
				name: 'Becks Pilsner',
				abv: 5,
				category: 'beer',
				calPerMl: 0.4047432502041613,
				id: 43
			},
			{
				name: 'Becks Sapphire',
				abv: 6,
				category: 'beer',
				calPerMl: 0.4751333806744502,
				id: 44
			},
			{
				name: 'Beefeater Gin',
				abv: 47,
				category: 'shot',
				calPerMl: 2.6982883346944084,
				id: 45
			},
			{
				name: 'Beez Neez (Matilda Bay)',
				abv: 4.7,
				category: 'beer',
				calPerMl: 0.3959444838953752,
				id: 46
			},
			{
				name: 'Belle-Vue Selection Lambic',
				abv: 6,
				category: 'beer',
				calPerMl: 0.4751333806744502,
				id: 47
			},
			{
				name: 'Big Flats Lager Beer',
				abv: 4.5,
				category: 'beer',
				calPerMl: 0.43407247123344833,
				id: 48
			},
			{
				name: 'Big Flats Light Beer',
				abv: 3.9,
				category: 'beer',
				calPerMl: 0.28156052188115566,
				id: 49
			},
			{
				name: 'Bitburger Light',
				abv: 2.8,
				category: 'beer',
				calPerMl: 0.28156052188115566,
				id: 50
			},
			{
				name: 'Blackthorn Cider',
				abv: 4.7,
				category: 'beer',
				calPerMl: 0.48979799118909373,
				id: 51
			},
			{
				name: 'Bloody Mary',
				abv: 8,
				category: 'beer',
				calPerMl: 0.7009683825999604,
				id: 52
			},
			{
				name: 'Blue Moon Belgian White',
				abv: 5.4,
				category: 'beer',
				calPerMl: 0.4809992248803076,
				id: 53
			},
			{
				name: 'Blue Moon Full Moon Winter Ale',
				abv: 5.52,
				category: 'beer',
				calPerMl: 0.5279259785271668,
				id: 54
			},
			{
				name: 'Blue Moon Harvest Moon Pumpkin Ale',
				abv: 5.76,
				category: 'beer',
				calPerMl: 0.5279259785271668,
				id: 55
			},
			{
				name: 'Blue Moon Honey Moon Summer Ale',
				abv: 5.2,
				category: 'beer',
				calPerMl: 0.46046877015980664,
				id: 56
			},
			{
				name: 'Blue Moon Rising Moon Spring Ale',
				abv: 5.4,
				category: 'beer',
				calPerMl: 0.4722004585715215,
				id: 57
			},
			{
				name: 'Blue Paddle Pilsner Lager',
				abv: 4.8,
				category: 'beer',
				calPerMl: 0.4252737049246622,
				id: 58
			},
			{
				name: 'Boags Draught',
				abv: 4.6,
				category: 'beer',
				calPerMl: 0.38421279548366033,
				id: 59
			},
			{
				name: 'Boags XXX Ale',
				abv: 4.8,
				category: 'beer',
				calPerMl: 0.4047432502041613,
				id: 60
			},
			{
				name: 'Boddingtons Pub Ale',
				abv: 4.6,
				category: 'beer',
				calPerMl: 0.43407247123344833,
				id: 61
			},
			{
				name: 'Bohemia Clasica',
				abv: 5.3,
				category: 'beer',
				calPerMl: 0.4663346143656641,
				id: 62
			},
			{
				name: 'Bombay Sapphire Gin',
				abv: 47,
				category: 'shot',
				calPerMl: 2.6748249578709786,
				id: 63
			},
			{
				name: 'Bowmans Vodka',
				abv: 40,
				category: 'shot',
				calPerMl: 2.275947551872675,
				id: 64
			},
			{
				name: 'Bud American Ale',
				abv: 5.3,
				category: 'beer',
				calPerMl: 0.5337918227330243,
				id: 65
			},
			{
				name: 'Bud Dry',
				abv: 5,
				category: 'beer',
				calPerMl: 0.3812798733807316,
				id: 66
			},
			{
				name: 'Bud Ice',
				abv: 5.5,
				category: 'beer',
				calPerMl: 0.39887740599830385,
				id: 67
			},
			{
				name: 'Bud Light',
				abv: 4.2,
				category: 'beer',
				calPerMl: 0.32262143132215754,
				id: 68
			},
			{
				name: 'Bud Light Golden Wheat',
				abv: 4.1,
				category: 'beer',
				calPerMl: 0.3460848081455872,
				id: 69
			},
			{
				name: 'Bud Light Lime',
				abv: 4.2,
				category: 'beer',
				calPerMl: 0.3402189639397298,
				id: 70
			},
			{
				name: 'Bud Light Lime-A-Rita 6%',
				abv: 6,
				category: 'beer',
				calPerMl: 1.0881141001865495,
				id: 71
			},
			{
				name: 'Bud Light Lime-A-Rita 8%',
				abv: 8,
				category: 'beer',
				calPerMl: 1.4517964409497088,
				id: 72
			},
			{
				name: 'Bud Light Platinum',
				abv: 6,
				category: 'beer',
				calPerMl: 0.4018103281012326,
				id: 73
			},
			{
				name: 'Bud Select 55',
				abv: 2.4,
				category: 'beer',
				calPerMl: 0.16131071566107877,
				id: 74
			},
			{
				name: 'Budweiser',
				abv: 5,
				category: 'beer',
				calPerMl: 0.4252737049246622,
				id: 75
			},
			{
				name: 'Budweiser Black Crown',
				abv: 6,
				category: 'beer',
				calPerMl: 0.4839321469832363,
				id: 76
			},
			{
				name: 'Budweiser Select',
				abv: 4.3,
				category: 'beer',
				calPerMl: 0.2903592881899418,
				id: 77
			},
			{
				name: 'Bulmers Irish Cider',
				abv: 4.5,
				category: 'beer',
				calPerMl: 0.4252737049246622,
				id: 78
			},
			{
				name: 'Bulmers Light Irish Cider',
				abv: 4.5,
				category: 'beer',
				calPerMl: 0.2903592881899418,
				id: 79
			},
			{
				name: 'Busch',
				abv: 4.3,
				category: 'beer',
				calPerMl: 0.33435311973387233,
				id: 80
			},
			{
				name: 'Busch Ice',
				abv: 5.9,
				category: 'beer',
				calPerMl: 0.5015296796008085,
				id: 81
			},
			{
				name: 'Busch Light',
				abv: 4.1,
				category: 'beer',
				calPerMl: 0.278627599778227,
				id: 82
			},
			{
				name: 'Busch NA',
				abv: 0.4,
				category: 'beer',
				calPerMl: 0.17597532617572229,
				id: 83
			},
			{
				name: 'Bushmills Irish Whiskey',
				abv: 40,
				category: 'shot',
				calPerMl: 2.2994109286961044,
				id: 84
			},
			{
				name: 'Cabernet Sauvignon',
				abv: 13.8,
				category: 'wine',
				calPerMl: 1.0699299831483915,
				id: 85
			},
			{
				name: 'Captain Morgan - Long Island Iced Tea',
				abv: 17,
				category: 'shot',
				calPerMl: 1.5720462471697858,
				id: 86
			},
			{
				name: 'Captain Morgan - Private Stock 40%',
				abv: 40,
				category: 'shot',
				calPerMl: 2.393264435989823,
				id: 87
			},
			{
				name: 'Captain Morgan 100 Proof Rum',
				abv: 50,
				category: 'shot',
				calPerMl: 2.8625319724584157,
				id: 88
			},
			{
				name: 'Captain Morgan Black Spiced Rum',
				abv: 47.3,
				category: 'shot',
				calPerMl: 2.7452150883412676,
				id: 89
			},
			{
				name: 'Captain Morgan Original Spiced Rum',
				abv: 35,
				category: 'shot',
				calPerMl: 2.017850406814949,
				id: 90
			},
			{
				name: 'Carling',
				abv: 4,
				category: 'beer',
				calPerMl: 0.34315188604265845,
				id: 91
			},
			{
				name: 'Carling Chrome',
				abv: 4.8,
				category: 'beer',
				calPerMl: 0.3900786396895177,
				id: 92
			},
			{
				name: 'Carlo Rossi - Blush',
				abv: 9.1,
				category: 'wine',
				calPerMl: 0.7039013047028893,
				id: 93
			},
			{
				name: 'Carlo Rossi - Burgundy',
				abv: 12.5,
				category: 'wine',
				calPerMl: 0.9502667613489004,
				id: 94
			},
			{
				name: 'Carlo Rossi - Cabernet Sauvignon',
				abv: 11.8,
				category: 'wine',
				calPerMl: 0.8798766308786116,
				id: 95
			},
			{
				name: 'Carlo Rossi - Chablis',
				abv: 10.2,
				category: 'wine',
				calPerMl: 0.8446815656434671,
				id: 96
			},
			{
				name: 'Carlo Rossi - Chianti',
				abv: 12.4,
				category: 'wine',
				calPerMl: 0.9502667613489004,
				id: 97
			},
			{
				name: 'Carlo Rossi - Paisano',
				abv: 11.9,
				category: 'wine',
				calPerMl: 0.9502667613489004,
				id: 98
			},
			{
				name: 'Carlo Rossi - Rhine',
				abv: 9.2,
				category: 'wine',
				calPerMl: 0.8094865004083226,
				id: 99
			},
			{
				name: 'Carlo Rossi - Sangria Spanada',
				abv: 10,
				category: 'wine',
				calPerMl: 0.8798766308786116,
				id: 100
			},
			{
				name: 'Carlo Rossi - Vin Rose',
				abv: 9.1,
				category: 'wine',
				calPerMl: 0.8094865004083226,
				id: 101
			},
			{
				name: 'Carlo Rossi - White Grenache',
				abv: 10.5,
				category: 'wine',
				calPerMl: 0.8446815656434671,
				id: 102
			},
			{
				name: 'Carlo Rossi - White Zinfandel',
				abv: 8,
				category: 'wine',
				calPerMl: 0.5983161089974558,
				id: 103
			},
			{
				name: 'Carlsberg Elephant',
				abv: 7.2,
				category: 'beer',
				calPerMl: 0.6247124079238141,
				id: 104
			},
			{
				name: 'Carlsberg Export',
				abv: 5,
				category: 'beer',
				calPerMl: 0.4458041596451631,
				id: 105
			},
			{
				name: 'Cascade Lager',
				abv: 4.8,
				category: 'beer',
				calPerMl: 0.3959444838953752,
				id: 106
			},
			{
				name: 'Cascade Premium Light',
				abv: 2.6,
				category: 'beer',
				calPerMl: 0.28156052188115566,
				id: 107
			},
			{
				name: 'Chambord Black Raspberry Liqueur',
				abv: 16.5,
				category: 'shot',
				calPerMl: 2.346337682342964,
				id: 108
			},
			{
				name: 'Chambord Flavored Vodka',
				abv: 37.5,
				category: 'shot',
				calPerMl: 2.8156052188115566,
				id: 109
			},
			{
				name: 'Champagne - Dom Perignon (Year 2000)',
				abv: 12.5,
				category: 'wine',
				calPerMl: 0.7742914351731781,
				id: 110
			},
			{
				name: 'Champagne - Moet Imperial (White Star)',
				abv: 12.5,
				category: 'wine',
				calPerMl: 0.8024474873612937,
				id: 111
			},
			{
				name: 'Chardonnay (Sterling Vineyards)',
				abv: 14.4,
				category: 'wine',
				calPerMl: 1.0980860353365072,
				id: 112
			},
			{
				name: 'Charles Shaw - Cabernet Sauvignon',
				abv: 12.5,
				category: 'wine',
				calPerMl: 0.8376425525964382,
				id: 113
			},
			{
				name: 'Chelada Bud Light',
				abv: 4.2,
				category: 'beer',
				calPerMl: 0.44287123754223445,
				id: 114
			},
			{
				name: 'Chelada Budweiser',
				abv: 5,
				category: 'beer',
				calPerMl: 0.5455235111447391,
				id: 115
			},
			{
				name: 'Chianti - Davinci',
				abv: 13,
				category: 'wine',
				calPerMl: 0.8798766308786116,
				id: 116
			},
			{
				name: 'Chimay Rouge',
				abv: 7,
				category: 'beer',
				calPerMl: 0.5455235111447391,
				id: 117
			},
			{
				name: 'Chimay Triple',
				abv: 8,
				category: 'beer',
				calPerMl: 0.5924502647915983,
				id: 118
			},
			{
				name: 'Chivas Regal Premium Scotch Whisky',
				abv: 40,
				category: 'shot',
				calPerMl: 2.4401911896366824,
				id: 119
			},
			{
				name: 'Cointreau Triple Sec',
				abv: 40,
				category: 'shot',
				calPerMl: 3.3552628857504385,
				id: 120
			},
			{
				name: 'Colt 45 Malt Liquor',
				abv: 6.1,
				category: 'beer',
				calPerMl: 0.5044626017037372,
				id: 121
			},
			{
				name: 'Coors Banquet',
				abv: 5,
				category: 'beer',
				calPerMl: 0.437005393336377,
				id: 122
			},
			{
				name: 'Coors Extra Gold Lager',
				abv: 5,
				category: 'beer',
				calPerMl: 0.4458041596451631,
				id: 123
			},
			{
				name: 'Coors Light',
				abv: 4.2,
				category: 'beer',
				calPerMl: 0.2991580544987279,
				id: 124
			},
			{
				name: 'Coors Non-Alcoholic',
				abv: 0.5,
				category: 'beer',
				calPerMl: 0.1701094819698649,
				id: 125
			},
			{
				name: 'Corona Extra',
				abv: 4.6,
				category: 'beer',
				calPerMl: 0.43407247123344833,
				id: 126
			},
			{
				name: 'Corona Light',
				abv: 4.1,
				category: 'beer',
				calPerMl: 0.2903592881899418,
				id: 127
			},
			{
				name: 'Coronado Brewing Orange Ave Wit',
				abv: 5.2,
				category: 'beer',
				calPerMl: 0.4458041596451631,
				id: 128
			},
			{
				name: 'Coronado Golden - Coronado Brewing Co.',
				abv: 5.4,
				category: 'beer',
				calPerMl: 0.4399383154393057,
				id: 129
			},
			{
				name: 'Coronado Idiot IPA',
				abv: 8.5,
				category: 'beer',
				calPerMl: 0.7068342268058179,
				id: 130
			},
			{
				name: 'Cosmopolitan',
				abv: 22.9,
				category: 'cocktail',
				calPerMl: 1.7597532617572231,
				id: 131
			},
			{
				name: 'Courvoisier XO Cognac',
				abv: 40,
				category: 'shot',
				calPerMl: 2.4401911896366824,
				id: 132
			},
			{
				name: 'Cragganmore Scotch Whisky',
				abv: 60.1,
				category: 'shot',
				calPerMl: 3.449116393044157,
				id: 133
			},
			{
				name: 'Cranberry Vodka (Cape Cod)',
				abv: 10.91,
				category: 'beer',
				calPerMl: 1.0059922813045457,
				id: 134
			},
			{
				name: 'Creme de menthe',
				abv: 36,
				category: 'shot',
				calPerMl: 4.387651465981342,
				id: 135
			},
			{
				name: 'Crispin Natural Hard Apple Cider',
				abv: 6.9,
				category: 'beer',
				calPerMl: 0.4106090944100187,
				id: 136
			},
			{
				name: 'Cristal',
				abv: 4.6,
				category: 'beer',
				calPerMl: 0.4047432502041613,
				id: 137
			},
			{
				name: 'Crown Gold',
				abv: 3.5,
				category: 'beer',
				calPerMl: 0.34315188604265845,
				id: 138
			},
			{
				name: 'Crown Lager',
				abv: 4.9,
				category: 'beer',
				calPerMl: 0.4164749386158761,
				id: 139
			},
			{
				name: 'Crown Royal - Special Reserve',
				abv: 40,
				category: 'shot',
				calPerMl: 2.2524841750492453,
				id: 140
			},
			{
				name: 'Dalwhinnie Scotch Whisky',
				abv: 57.8,
				category: 'shot',
				calPerMl: 3.308336132103579,
				id: 141
			},
			{
				name: 'Disaronno - Amaretto Di Saronno',
				abv: 28,
				category: 'shot',
				calPerMl: 2.9563854797521345,
				id: 142
			},
			{
				name: 'Dogfish Head 60min IPA',
				abv: 6,
				category: 'beer',
				calPerMl: 0.6129807195120993,
				id: 143
			},
			{
				name: 'Don Julio Blanco Tequila',
				abv: 40,
				category: 'shot',
				calPerMl: 2.2524841750492453,
				id: 144
			},
			{
				name: 'Dos Equis Amber',
				abv: 4.6,
				category: 'beer',
				calPerMl: 0.42820662702759094,
				id: 145
			},
			{
				name: 'Dos Equis Lager',
				abv: 4.6,
				category: 'beer',
				calPerMl: 0.4164749386158761,
				id: 146
			},
			{
				name: 'Dry Blackthorn Cider',
				abv: 5,
				category: 'beer',
				calPerMl: 0.4047432502041613,
				id: 147
			},
			{
				name: 'Dunkelweisse',
				abv: 5.5,
				category: 'beer',
				calPerMl: 0.48979799118909373,
				id: 148
			},
			{
				name: 'Duvel',
				abv: 8.5,
				category: 'beer',
				calPerMl: 0.6247124079238141,
				id: 149
			},
			{
				name: 'E & J Brandy VSOP',
				abv: 40,
				category: 'shot',
				calPerMl: 2.322874305519534,
				id: 150
			},
			{
				name: 'E&J Brandy',
				abv: 40,
				category: 'shot',
				calPerMl: 2.275947551872675,
				id: 151
			},
			{
				name: 'E&J Cognac',
				abv: 40,
				category: 'shot',
				calPerMl: 2.322874305519534,
				id: 152
			},
			{
				name: 'E&J XO Brandy',
				abv: 40,
				category: 'shot',
				calPerMl: 2.322874305519534,
				id: 153
			},
			{
				name: 'Emu Bitter',
				abv: 4,
				category: 'beer',
				calPerMl: 0.4164749386158761,
				id: 154
			},
			{
				name: 'Emu Draft',
				abv: 3,
				category: 'beer',
				calPerMl: 0.3108897429104427,
				id: 155
			},
			{
				name: 'Everclear',
				abv: 95,
				category: 'shot',
				calPerMl: 5.3027231620950985,
				id: 156
			},
			{
				name: 'Exotic Berry - Bartles & Jaymes',
				abv: 3.6,
				category: 'beer',
				calPerMl: 0.615913641615028,
				id: 157
			},
			{
				name: 'Fat Tire',
				abv: 5.2,
				category: 'beer',
				calPerMl: 0.46926753646859276,
				id: 158
			},
			{
				name: 'Fireball Whisky',
				abv: 33,
				category: 'shot',
				calPerMl: 2.534044696930401,
				id: 159
			},
			{
				name: 'Fosters',
				abv: 5,
				category: 'beer',
				calPerMl: 0.4252737049246622,
				id: 160
			},
			{
				name: 'Fosters Premium Ale',
				abv: 5.5,
				category: 'beer',
				calPerMl: 0.46926753646859276,
				id: 161
			},
			{
				name: 'Four Loko (all flavors)',
				abv: 12,
				category: 'beer',
				calPerMl: 0.9883947486869735,
				id: 162
			},
			{
				name: 'Franzia Cabernet Sauvingon',
				abv: 12,
				category: 'wine',
				calPerMl: 0.7390963699380336,
				id: 163
			},
			{
				name: 'Franzia Chillable Red',
				abv: 9,
				category: 'wine',
				calPerMl: 0.7390963699380336,
				id: 164
			},
			{
				name: 'Franzia Crisp White Wine',
				abv: 9,
				category: 'wine',
				calPerMl: 0.7390963699380336,
				id: 165
			},
			{
				name: 'Franzia Merlot Wine',
				abv: 12.5,
				category: 'wine',
				calPerMl: 0.7390963699380336,
				id: 166
			},
			{
				name: 'Franzia Shiraz Wine',
				abv: 13,
				category: 'wine',
				calPerMl: 0.7742914351731781,
				id: 167
			},
			{
				name: 'Frederick Miller Classic Chocolate Lager',
				abv: 5.5,
				category: 'beer',
				calPerMl: 0.5719198100710975,
				id: 168
			},
			{
				name: 'Fuzzy Navel - Bartles & Jaymes',
				abv: 3.6,
				category: 'beer',
				calPerMl: 0.6745720836736021,
				id: 169
			},
			{
				name: 'Gaymers Berry Cider',
				abv: 3.8,
				category: 'beer',
				calPerMl: 0.5513893553505965,
				id: 170
			},
			{
				name: 'Gaymers Original Cider',
				abv: 4.5,
				category: 'beer',
				calPerMl: 0.46926753646859276,
				id: 171
			},
			{
				name: 'Gaymers Pear Cider',
				abv: 4.5,
				category: 'beer',
				calPerMl: 0.5308589006300956,
				id: 172
			},
			{
				name: 'George Killians Irish Red',
				abv: 5.4,
				category: 'beer',
				calPerMl: 0.4751333806744502,
				id: 173
			},
			{
				name: 'Gewurztraminer Wine',
				abv: 12,
				category: 'wine',
				calPerMl: 0.8446815656434671,
				id: 174
			},
			{
				name: 'Gin and Tonic',
				abv: 10,
				category: 'beer',
				calPerMl: 0.7478951362468197,
				id: 175
			},
			{
				name: 'Girl Go Lightly Rose Wine',
				abv: 11,
				category: 'wine',
				calPerMl: 0.8235645265023804,
				id: 176
			},
			{
				name: 'Glenfiddich Scotch Whisky',
				abv: 40,
				category: 'shot',
				calPerMl: 2.2994109286961044,
				id: 177
			},
			{
				name: 'Godiva - Chocolate Cream Liqueur',
				abv: 15,
				category: 'shot',
				calPerMl: 2.9329221029287047,
				id: 178
			},
			{
				name: 'Goldschlager',
				abv: 43.5,
				category: 'shot',
				calPerMl: 3.3552628857504385,
				id: 179
			},
			{
				name: 'Goose Island Honkers Ale',
				abv: 4.3,
				category: 'beer',
				calPerMl: 0.45460292595394924,
				id: 180
			},
			{
				name: 'Goose Island India Pale Ale',
				abv: 5.9,
				category: 'beer',
				calPerMl: 0.6188465637179568,
				id: 181
			},
			{
				name: 'Goose Island Nut Brown Ale',
				abv: 5.4,
				category: 'beer',
				calPerMl: 0.5807185763798836,
				id: 182
			},
			{
				name: 'Goose Island Oktoberfest',
				abv: 6.4,
				category: 'beer',
				calPerMl: 0.636444096335529,
				id: 183
			},
			{
				name: 'Goose Island Ten Hills Pale Ale',
				abv: 6.2,
				category: 'beer',
				calPerMl: 0.5953831868945271,
				id: 184
			},
			{
				name: 'Gordons - Dry Gin',
				abv: 40,
				category: 'shot',
				calPerMl: 2.2524841750492453,
				id: 185
			},
			{
				name: 'Grahams 2007 Vintage Port',
				abv: 20,
				category: 'wine',
				calPerMl: 1.6119339877696164,
				id: 186
			},
			{
				name: 'Grand Marnier Orange Liqueur',
				abv: 40,
				category: 'shot',
				calPerMl: 2.6748249578709786,
				id: 187
			},
			{
				name: 'Grand Monarch',
				abv: 40,
				category: 'shot',
				calPerMl: 3.4256530162207275,
				id: 188
			},
			{
				name: 'Greens Premium Golden Ale',
				abv: 4.8,
				category: 'beer',
				calPerMl: 0.45753584805687797,
				id: 189
			},
			{
				name: 'Greens Premium Pils',
				abv: 4.8,
				category: 'beer',
				calPerMl: 0.44287123754223445,
				id: 190
			},
			{
				name: 'Greens Tripel Blonde Ale',
				abv: 8.5,
				category: 'beer',
				calPerMl: 0.6041819532033132,
				id: 191
			},
			{
				name: 'Grey Goose Vodka',
				abv: 40,
				category: 'shot',
				calPerMl: 2.275947551872675,
				id: 192
			},
			{
				name: 'Grolsch Amber Ale',
				abv: 5.4,
				category: 'beer',
				calPerMl: 0.46926753646859276,
				id: 193
			},
			{
				name: 'Grolsch Blonde Lager',
				abv: 2.8,
				category: 'beer',
				calPerMl: 0.35195065235144457,
				id: 194
			},
			{
				name: 'Grolsch Light Lager',
				abv: 3.6,
				category: 'beer',
				calPerMl: 0.2844934439840844,
				id: 195
			},
			{
				name: 'Grolsch Premium Lager',
				abv: 5,
				category: 'beer',
				calPerMl: 0.4311395491305196,
				id: 196
			},
			{
				name: 'Guinness Black Lager',
				abv: 4.5,
				category: 'beer',
				calPerMl: 0.38421279548366033,
				id: 197
			},
			{
				name: 'Guinness Draught',
				abv: 4.2,
				category: 'beer',
				calPerMl: 0.3754140291748742,
				id: 198
			},
			{
				name: 'Guinness Generous Ale',
				abv: 5.6,
				category: 'beer',
				calPerMl: 0.4751333806744502,
				id: 199
			},
			{
				name: 'HRD Peach Schnapps',
				abv: 21,
				category: 'shot',
				calPerMl: 2.3698010591663934,
				id: 200
			},
			{
				name: 'HRD Root Beer Schnapps',
				abv: 21,
				category: 'shot',
				calPerMl: 2.322874305519534,
				id: 201
			},
			{
				name: 'Hahn Premium',
				abv: 5,
				category: 'beer',
				calPerMl: 0.42820662702759094,
				id: 202
			},
			{
				name: 'Hahn Premium Light',
				abv: 2.6,
				category: 'beer',
				calPerMl: 0.28156052188115566,
				id: 203
			},
			{
				name: 'Hakutsuru Draft Sake',
				abv: 14,
				category: 'beer',
				calPerMl: 1.0206568918191894,
				id: 204
			},
			{
				name: 'Hakutsuru Plum Wine',
				abv: 12.5,
				category: 'wine',
				calPerMl: 1.3233344528414317,
				id: 205
			},
			{
				name: 'Hakutsuru Plum Wine Slim',
				abv: 10.5,
				category: 'wine',
				calPerMl: 1.112164061430565,
				id: 206
			},
			{
				name: 'Hakutsuru Premium Sake',
				abv: 15.5,
				category: 'wine',
				calPerMl: 1.1543981397127383,
				id: 207
			},
			{
				name: 'Hakutsuru Superior Sake',
				abv: 14.5,
				category: 'wine',
				calPerMl: 1.0206568918191894,
				id: 208
			},
			{
				name: 'Hamms',
				abv: 4.7,
				category: 'beer',
				calPerMl: 0.4223407828217335,
				id: 209
			},
			{
				name: 'Hamms Special Light',
				abv: 3.9,
				category: 'beer',
				calPerMl: 0.32262143132215754,
				id: 210
			},
			{
				name: 'Harbin Lager',
				abv: 4.8,
				category: 'beer',
				calPerMl: 0.4223407828217335,
				id: 211
			},
			{
				name: 'Harp Lager',
				abv: 4.7,
				category: 'beer',
				calPerMl: 0.44873708174809185,
				id: 212
			},
			{
				name: 'Heineken',
				abv: 5,
				category: 'beer',
				calPerMl: 0.4399383154393057,
				id: 213
			},
			{
				name: 'Heineken Light',
				abv: 3.5,
				category: 'beer',
				calPerMl: 0.2903592881899418,
				id: 214
			},
			{
				name: 'Hendricks Gin',
				abv: 44,
				category: 'shot',
				calPerMl: 2.534044696930401,
				id: 215
			},
			{
				name: 'Henry Weinhards Belgian Style Wheat',
				abv: 4.9,
				category: 'beer',
				calPerMl: 0.45460292595394924,
				id: 216
			},
			{
				name: 'Henry Weinhards Blonde',
				abv: 5.1,
				category: 'beer',
				calPerMl: 0.4722004585715215,
				id: 217
			},
			{
				name: 'Henry Weinhards Blue Boar',
				abv: 4.6,
				category: 'beer',
				calPerMl: 0.4311395491305196,
				id: 218
			},
			{
				name: 'Henry Weinhards Classic Dark Lager',
				abv: 5,
				category: 'beer',
				calPerMl: 0.4809992248803076,
				id: 219
			},
			{
				name: 'Henry Weinhards Hefeweizen',
				abv: 4.9,
				category: 'beer',
				calPerMl: 0.44287123754223445,
				id: 220
			},
			{
				name: 'Henry Weinhards India Pale Ale',
				abv: 6,
				category: 'beer',
				calPerMl: 0.5543222774535252,
				id: 221
			},
			{
				name: 'Henry Weinhards Private Reserve',
				abv: 4.8,
				category: 'beer',
				calPerMl: 0.4399383154393057,
				id: 222
			},
			{
				name: 'Hoegaarden White',
				abv: 4.9,
				category: 'beer',
				calPerMl: 0.4663346143656641,
				id: 223
			},
			{
				name: 'Hornsbys Hard Cider - Draft Cider',
				abv: 6,
				category: 'beer',
				calPerMl: 0.5249930564242382,
				id: 224
			},
			{
				name: 'Hornsbys Hard Cider - Hard Apple Cider',
				abv: 5.5,
				category: 'beer',
				calPerMl: 0.586584420585741,
				id: 225
			},
			{
				name: 'Hpnotiq',
				abv: 17,
				category: 'shot',
				calPerMl: 2.60443482740069,
				id: 226
			},
			{
				name: 'Hurricane (Original)',
				abv: 6,
				category: 'beer',
				calPerMl: 0.39887740599830385,
				id: 227
			},
			{
				name: 'Hurricane High Gravity',
				abv: 8.1,
				category: 'beer',
				calPerMl: 0.6217794858208854,
				id: 228
			},
			{
				name: 'Hurricane Ice',
				abv: 7.5,
				category: 'beer',
				calPerMl: 0.5132613680125233,
				id: 229
			},
			{
				name: 'Icehouse',
				abv: 5.5,
				category: 'beer',
				calPerMl: 0.437005393336377,
				id: 230
			},
			{
				name: 'Imperial',
				abv: 4.6,
				category: 'beer',
				calPerMl: 0.4399383154393057,
				id: 231
			},
			{
				name: 'Irish Car Bomb',
				abv: 6.9,
				category: 'beer',
				calPerMl: 0.6540416289531011,
				id: 232
			},
			{
				name: 'Jack Daniels Whiskey',
				abv: 40,
				category: 'shot',
				calPerMl: 2.2994109286961044,
				id: 233
			},
			{
				name: 'Jack and Coke',
				abv: 10,
				category: 'beer',
				calPerMl: 0.9033400077020411,
				id: 234
			},
			{
				name: 'Jack and Diet Coke',
				abv: 10,
				category: 'beer',
				calPerMl: 0.5719198100710975,
				id: 235
			},
			{
				name: 'Jager Bomb',
				abv: 8.75,
				category: 'other',
				calPerMl: 1.2611565042593431,
				id: 236
			},
			{
				name: 'Jagermeister',
				abv: 35,
				category: 'shot',
				calPerMl: 2.60443482740069,
				id: 237
			},
			{
				name: 'James Boags Premium',
				abv: 5,
				category: 'beer',
				calPerMl: 0.4164749386158761,
				id: 238
			},
			{
				name: 'James Boags Premium Light',
				abv: 2.9,
				category: 'beer',
				calPerMl: 0.26982883346944087,
				id: 239
			},
			{
				name: 'Jameson Irish Whiskey',
				abv: 40,
				category: 'shot',
				calPerMl: 2.4401911896366824,
				id: 240
			},
			{
				name: 'Jeremiah Weed - Lightning Lemonade',
				abv: 5.8,
				category: 'beer',
				calPerMl: 0.7068342268058179,
				id: 241
			},
			{
				name: 'Jeremiah Weed - Roadhouse Tea',
				abv: 5.8,
				category: 'beer',
				calPerMl: 0.9883947486869735,
				id: 242
			},
			{
				name: 'Jeremiah Weed - Spiked Cola',
				abv: 5.8,
				category: 'beer',
				calPerMl: 0.6628403952618873,
				id: 243
			},
			{
				name: 'Jeremiah Weed Bourbon',
				abv: 50,
				category: 'shot',
				calPerMl: 3.519506523514446,
				id: 244
			},
			{
				name: 'Jeremiah Weed Sweet Tea',
				abv: 35,
				category: 'shot',
				calPerMl: 2.7452150883412676,
				id: 245
			},
			{
				name: 'Jim Beam Kentuckty Straight Bourbon Whiskey',
				abv: 40,
				category: 'shot',
				calPerMl: 2.346337682342964,
				id: 246
			},
			{
				name: 'Johnnie Walker - Red Label 43%',
				abv: 43,
				category: 'shot',
				calPerMl: 2.463654566460112,
				id: 247
			},
			{
				name: 'Jose Cuervo - Golden Margarita Pre mixed',
				abv: 12.7,
				category: 'beer',
				calPerMl: 1.2435589716417708,
				id: 248
			},
			{
				name: 'Jose Cuervo Especial (Gold)',
				abv: 40,
				category: 'shot',
				calPerMl: 2.2524841750492453,
				id: 249
			},
			{
				name: 'Jose Cuervo Especial (Silver)',
				abv: 40,
				category: 'shot',
				calPerMl: 2.2524841750492453,
				id: 250
			},
			{
				name: 'Jose Cuervo Light Margarita',
				abv: 9.95,
				category: 'beer',
				calPerMl: 0.7977548119966077,
				id: 251
			},
			{
				name: 'K Cider (UK version)',
				abv: 8.35,
				category: 'beer',
				calPerMl: 0.6569745510560299,
				id: 252
			},
			{
				name: 'Kahlua',
				abv: 20,
				category: 'shot',
				calPerMl: 3.1675558711630014,
				id: 253
			},
			{
				name: 'Kamikaze',
				abv: 28.6,
				category: 'cocktail',
				calPerMl: 2.0010908519410706,
				id: 254
			},
			{
				name: 'Karl Strauss - Amber Lager',
				abv: 4.2,
				category: 'beer',
				calPerMl: 0.4722004585715215,
				id: 255
			},
			{
				name: 'Karl Strauss - Red Trolley Ale',
				abv: 5.8,
				category: 'beer',
				calPerMl: 0.5924502647915983,
				id: 256
			},
			{
				name: 'Ketel One Vodka',
				abv: 40,
				category: 'shot',
				calPerMl: 2.2524841750492453,
				id: 257
			},
			{
				name: 'Keystone Ice',
				abv: 5.9,
				category: 'beer',
				calPerMl: 0.4252737049246622,
				id: 258
			},
			{
				name: 'Keystone Light',
				abv: 4.13,
				category: 'beer',
				calPerMl: 0.3050238987045853,
				id: 259
			},
			{
				name: 'Keystone Premium',
				abv: 4.43,
				category: 'beer',
				calPerMl: 0.32555435342508626,
				id: 260
			},
			{
				name: 'King Cobra',
				abv: 6,
				category: 'beer',
				calPerMl: 0.39301156179244645,
				id: 261
			},
			{
				name: 'Kirin Free',
				abv: 0,
				category: 'beer',
				calPerMl: 0.11438396201421949,
				id: 262
			},
			{
				name: 'Kirin Ichiban',
				abv: 4.9,
				category: 'beer',
				calPerMl: 0.4311395491305196,
				id: 263
			},
			{
				name: 'Kirin Light',
				abv: 3.2,
				category: 'beer',
				calPerMl: 0.278627599778227,
				id: 264
			},
			{
				name: 'Knob Creek Bourbon',
				abv: 50,
				category: 'shot',
				calPerMl: 2.8156052188115566,
				id: 265
			},
			{
				name: 'Kona Big Wave Golden Ale',
				abv: 4.4,
				category: 'beer',
				calPerMl: 0.38714571758658906,
				id: 266
			},
			{
				name: 'Kona Fire Rock Pale Ale',
				abv: 6,
				category: 'beer',
				calPerMl: 0.5455235111447391,
				id: 267
			},
			{
				name: 'Kona Koko Nut Brown Ale',
				abv: 5.5,
				category: 'beer',
				calPerMl: 0.5396576669388817,
				id: 268
			},
			{
				name: 'Kona Longboard Island Lager',
				abv: 4.6,
				category: 'beer',
				calPerMl: 0.4223407828217335,
				id: 269
			},
			{
				name: 'Kona Pipeline Porter',
				abv: 5.3,
				category: 'beer',
				calPerMl: 0.5425905890418103,
				id: 270
			},
			{
				name: 'Kona Wailua Wheat Ale',
				abv: 5.4,
				category: 'beer',
				calPerMl: 0.45460292595394924,
				id: 271
			},
			{
				name: 'Konig Pilsener',
				abv: 4.9,
				category: 'beer',
				calPerMl: 0.437005393336377,
				id: 272
			},
			{
				name: 'Konig Radler',
				abv: 2.5,
				category: 'beer',
				calPerMl: 0.21996915771965286,
				id: 273
			},
			{
				name: 'Krombacher Dark',
				abv: 4.3,
				category: 'beer',
				calPerMl: 0.3636823407631594,
				id: 274
			},
			{
				name: 'Krombacher Pils',
				abv: 4.8,
				category: 'beer',
				calPerMl: 0.4047432502041613,
				id: 275
			},
			{
				name: 'Krombacher Weizen',
				abv: 5.3,
				category: 'beer',
				calPerMl: 0.46926753646859276,
				id: 276
			},
			{
				name: 'Kronenbourg 1664',
				abv: 5.5,
				category: 'beer',
				calPerMl: 0.42820662702759094,
				id: 277
			},
			{
				name: 'Labatt Blue',
				abv: 5,
				category: 'beer',
				calPerMl: 0.3959444838953752,
				id: 278
			},
			{
				name: 'Labatt Blue Light',
				abv: 4,
				category: 'beer',
				calPerMl: 0.31675558711630014,
				id: 279
			},
			{
				name: 'Labatt Sterling',
				abv: 4,
				category: 'beer',
				calPerMl: 0.26982883346944087,
				id: 280
			},
			{
				name: 'Landshark Lager',
				abv: 4.6,
				category: 'beer',
				calPerMl: 0.4399383154393057,
				id: 281
			},
			{
				name: 'Leffe Tripel',
				abv: 8.5,
				category: 'beer',
				calPerMl: 0.7273646815263188,
				id: 282
			},
			{
				name: 'Leinenkugels BIG BUTT Dopplebock',
				abv: 5.8,
				category: 'beer',
				calPerMl: 0.5689868879681688,
				id: 283
			},
			{
				name: 'Leinenkugels Berry Weiss',
				abv: 4.7,
				category: 'beer',
				calPerMl: 0.6071148753062419,
				id: 284
			},
			{
				name: 'Leinenkugels Creamy Dark',
				abv: 4.9,
				category: 'beer',
				calPerMl: 0.49859675749787985,
				id: 285
			},
			{
				name: 'Leinenkugels Fireside Nut Brown',
				abv: 4.9,
				category: 'beer',
				calPerMl: 0.45460292595394924,
				id: 286
			},
			{
				name: 'Leinenkugels Honey Weiss',
				abv: 4.9,
				category: 'beer',
				calPerMl: 0.437005393336377,
				id: 287
			},
			{
				name: 'Leinenkugels Light',
				abv: 4.2,
				category: 'beer',
				calPerMl: 0.3196885092192288,
				id: 288
			},
			{
				name: 'Leinenkugels Oktoberfest Lager',
				abv: 5.1,
				category: 'beer',
				calPerMl: 0.49859675749787985,
				id: 289
			},
			{
				name: 'Leinenkugels Original Lager',
				abv: 4.7,
				category: 'beer',
				calPerMl: 0.4458041596451631,
				id: 290
			},
			{
				name: 'Leinenkugels Red Lager',
				abv: 4.9,
				category: 'beer',
				calPerMl: 0.486865069086165,
				id: 291
			},
			{
				name: 'Leinenkugels Summer Shandy',
				abv: 4.2,
				category: 'beer',
				calPerMl: 0.3812798733807316,
				id: 292
			},
			{
				name: 'Leinenkugels Sunset Wheat',
				abv: 4.9,
				category: 'beer',
				calPerMl: 0.4839321469832363,
				id: 293
			},
			{
				name: 'Licher Pilsner Leicht',
				abv: 2.8,
				category: 'beer',
				calPerMl: 0.24929837874893992,
				id: 294
			},
			{
				name: 'Limoncello',
				abv: 32,
				category: 'shot',
				calPerMl: 3.636823407631594,
				id: 295
			},
			{
				name: 'Long Island Iced Tea',
				abv: 23.8,
				category: 'beer',
				calPerMl: 1.5515157924492848,
				id: 296
			},
			{
				name: 'Lowenbrau Dark',
				abv: 5,
				category: 'beer',
				calPerMl: 0.46926753646859276,
				id: 297
			},
			{
				name: 'Lowenbrau Special Beer',
				abv: 5.2,
				category: 'beer',
				calPerMl: 0.46926753646859276,
				id: 298
			},
			{
				name: 'Lucid Absinthe Superieure',
				abv: 62,
				category: 'shot',
				calPerMl: 4.692675364685928,
				id: 299
			},
			{
				name: 'MARTINI & ROSSI Asti',
				abv: 7,
				category: 'wine',
				calPerMl: 0.8446815656434671,
				id: 300
			},
			{
				name: 'MARTINI & ROSSI Extra Dry',
				abv: 18,
				category: 'wine',
				calPerMl: 1.1262420875246228,
				id: 301
			},
			{
				name: 'MARTINI & ROSSI Prosecco',
				abv: 10.5,
				category: 'wine',
				calPerMl: 0.7390963699380336,
				id: 302
			},
			{
				name: 'MGD 64 Lemonade',
				abv: 2.8,
				category: 'beer',
				calPerMl: 0.1877070145874371,
				id: 303
			},
			{
				name: 'Mad Dog 20/20 Red Grape Wine',
				abv: 13,
				category: 'wine',
				calPerMl: 1.4078026094057785,
				id: 304
			},
			{
				name: 'Magners Golden Draught',
				abv: 4.5,
				category: 'beer',
				calPerMl: 0.48979799118909373,
				id: 305
			},
			{
				name: 'Magners Irish Cider',
				abv: 4.5,
				category: 'beer',
				calPerMl: 0.3666152628660881,
				id: 306
			},
			{
				name: 'Magners Original Cider (UK varient)',
				abv: 4.5,
				category: 'beer',
				calPerMl: 0.44873708174809185,
				id: 307
			},
			{
				name: 'Magners Pear Cider',
				abv: 4.5,
				category: 'beer',
				calPerMl: 0.4780663027773789,
				id: 308
			},
			{
				name: 'Magners Pear and Ginger',
				abv: 4,
				category: 'beer',
				calPerMl: 0.46926753646859276,
				id: 309
			},
			{
				name: 'Magners Spiced Apple and Honey',
				abv: 4,
				category: 'beer',
				calPerMl: 0.4722004585715215,
				id: 310
			},
			{
				name: 'Magnum Malt Liquor',
				abv: 5.6,
				category: 'beer',
				calPerMl: 0.46046877015980664,
				id: 311
			},
			{
				name: 'Makers Mark',
				abv: 45.5,
				category: 'shot',
				calPerMl: 2.5809714505772603,
				id: 312
			},
			{
				name: 'Malibu Rum',
				abv: 21,
				category: 'shot',
				calPerMl: 1.9005335226978008,
				id: 313
			},
			{
				name: 'Margarita',
				abv: 10,
				category: 'beer',
				calPerMl: 1.22302851692127,
				id: 314
			},
			{
				name: 'Margarita - Bartles & Jaymes',
				abv: 3.6,
				category: 'beer',
				calPerMl: 0.7625597467614632,
				id: 315
			},
			{
				name: 'Martini',
				abv: 43.1,
				category: 'cocktail',
				calPerMl: 2.595636061091904,
				id: 316
			},
			{
				name: 'Merlot',
				abv: 13.9,
				category: 'wine',
				calPerMl: 1.0699299831483915,
				id: 317
			},
			{
				name: 'Michelob',
				abv: 4.8,
				category: 'beer',
				calPerMl: 0.46340169226273537,
				id: 318
			},
			{
				name: 'Michelob AmberBock',
				abv: 5.1,
				category: 'beer',
				calPerMl: 0.45460292595394924,
				id: 319
			},
			{
				name: 'Michelob Honey Lager',
				abv: 4.9,
				category: 'beer',
				calPerMl: 0.5103284459095947,
				id: 320
			},
			{
				name: 'Michelob Light',
				abv: 4.1,
				category: 'beer',
				calPerMl: 0.3607494186602307,
				id: 321
			},
			{
				name: 'Michelob ULTRA Dragonfruit Peach',
				abv: 4,
				category: 'beer',
				calPerMl: 0.278627599778227,
				id: 322
			},
			{
				name: 'Michelob ULTRA Lime Cactus',
				abv: 4,
				category: 'beer',
				calPerMl: 0.278627599778227,
				id: 323
			},
			{
				name: 'Michelob ULTRA Pomegranate Raspberry',
				abv: 4,
				category: 'beer',
				calPerMl: 0.278627599778227,
				id: 324
			},
			{
				name: 'Michelob Ultra',
				abv: 4.2,
				category: 'beer',
				calPerMl: 0.278627599778227,
				id: 325
			},
			{
				name: 'Michelob Ultra 19th Hole Light Tea & Lemonade',
				abv: 3.9,
				category: 'beer',
				calPerMl: 0.4106090944100187,
				id: 326
			},
			{
				name: 'Michelob Ultra Amber',
				abv: 4,
				category: 'beer',
				calPerMl: 0.278627599778227,
				id: 327
			},
			{
				name: 'Michelob Ultra Light Cider',
				abv: 4,
				category: 'beer',
				calPerMl: 0.35195065235144457,
				id: 328
			},
			{
				name: 'Mickeys Fine Malt Liquor',
				abv: 5.6,
				category: 'beer',
				calPerMl: 0.46046877015980664,
				id: 329
			},
			{
				name: 'Mickeys Ice',
				abv: 5.8,
				category: 'beer',
				calPerMl: 0.46046877015980664,
				id: 330
			},
			{
				name: 'Midori',
				abv: 20,
				category: 'shot',
				calPerMl: 2.346337682342964,
				id: 331
			},
			{
				name: 'Mikes \'The Classic Margarita\'',
				abv: 5.5,
				category: 'beer',
				calPerMl: 0.7390963699380336,
				id: 332
			},
			{
				name: 'Mikes Hard Lemonade',
				abv: 5,
				category: 'beer',
				calPerMl: 0.6892366941882456,
				id: 333
			},
			{
				name: 'Mikes Lite Hard Lemonade',
				abv: 3.2,
				category: 'beer',
				calPerMl: 0.34315188604265845,
				id: 334
			},
			{
				name: 'Miller Chill',
				abv: 4.2,
				category: 'beer',
				calPerMl: 0.2932922102928705,
				id: 335
			},
			{
				name: 'Miller Fortune',
				abv: 6.9,
				category: 'beer',
				calPerMl: 0.5455235111447391,
				id: 336
			},
			{
				name: 'Miller Genuine Draft',
				abv: 4.6,
				category: 'beer',
				calPerMl: 0.4194078607188048,
				id: 337
			},
			{
				name: 'Miller Genuine Draft Light',
				abv: 4.2,
				category: 'beer',
				calPerMl: 0.32262143132215754,
				id: 338
			},
			{
				name: 'Miller High Life',
				abv: 4.6,
				category: 'beer',
				calPerMl: 0.4194078607188048,
				id: 339
			},
			{
				name: 'Miller High Life Light',
				abv: 4.1,
				category: 'beer',
				calPerMl: 0.32262143132215754,
				id: 340
			},
			{
				name: 'Miller Icehouse Light',
				abv: 4.13,
				category: 'beer',
				calPerMl: 0.3020909766016566,
				id: 341
			},
			{
				name: 'Miller Lite',
				abv: 4.2,
				category: 'beer',
				calPerMl: 0.28156052188115566,
				id: 342
			},
			{
				name: 'Miller64',
				abv: 2.8,
				category: 'beer',
				calPerMl: 0.1877070145874371,
				id: 343
			},
			{
				name: 'Milwaukees Best Ice',
				abv: 5.9,
				category: 'beer',
				calPerMl: 0.4223407828217335,
				id: 344
			},
			{
				name: 'Milwaukees Best Light',
				abv: 4.1,
				category: 'beer',
				calPerMl: 0.28742636608701305,
				id: 345
			},
			{
				name: 'Milwaukees Best Premium',
				abv: 4.3,
				category: 'beer',
				calPerMl: 0.3754140291748742,
				id: 346
			},
			{
				name: 'Mimosa',
				abv: 6.25,
				category: 'wine',
				calPerMl: 0.6264721611855714,
				id: 347
			},
			{
				name: 'Modelo Especial',
				abv: 4.4,
				category: 'beer',
				calPerMl: 0.4252737049246622,
				id: 348
			},
			{
				name: 'Mojito',
				abv: 6.3,
				category: 'beer',
				calPerMl: 0.6217794858208854,
				id: 349
			},
			{
				name: 'Molson Canadian',
				abv: 5,
				category: 'beer',
				calPerMl: 0.43407247123344833,
				id: 350
			},
			{
				name: 'Molson Canadian 67',
				abv: 3,
				category: 'beer',
				calPerMl: 0.19650578089622323,
				id: 351
			},
			{
				name: 'Molson Canadian Light',
				abv: 3.9,
				category: 'beer',
				calPerMl: 0.35195065235144457,
				id: 352
			},
			{
				name: 'Molson Golden',
				abv: 5,
				category: 'beer',
				calPerMl: 0.44287123754223445,
				id: 353
			},
			{
				name: 'Molson Ice',
				abv: 5.6,
				category: 'beer',
				calPerMl: 0.4956638353949511,
				id: 354
			},
			{
				name: 'Molson XXX',
				abv: 7.3,
				category: 'beer',
				calPerMl: 0.5895173426886696,
				id: 355
			},
			{
				name: 'Monarch 151 Rum',
				abv: 75.5,
				category: 'shot',
				calPerMl: 4.270334581864194,
				id: 356
			},
			{
				name: 'Monarch Brandy',
				abv: 40,
				category: 'shot',
				calPerMl: 2.2994109286961044,
				id: 357
			},
			{
				name: 'Monarch Citron Vodka',
				abv: 35,
				category: 'shot',
				calPerMl: 1.9709236531680896,
				id: 358
			},
			{
				name: 'Monarch Pineapple Rum',
				abv: 21,
				category: 'shot',
				calPerMl: 1.8536067690509415,
				id: 359
			},
			{
				name: 'Moscato (Girl Go Lightly 2012)',
				abv: 11,
				category: 'wine',
				calPerMl: 0.8657986047845537,
				id: 360
			},
			{
				name: 'Murphys Irish Stout',
				abv: 4,
				category: 'beer',
				calPerMl: 0.3636823407631594,
				id: 361
			},
			{
				name: 'Myers Frozen Pina Colada',
				abv: 13,
				category: 'wine',
				calPerMl: 1.6893631312869342,
				id: 362
			},
			{
				name: 'Myers Frozen Strawberry Daiquiri',
				abv: 13,
				category: 'wine',
				calPerMl: 1.5274658312052696,
				id: 363
			},
			{
				name: 'Myers Original Dark Rum',
				abv: 40,
				category: 'shot',
				calPerMl: 2.2524841750492453,
				id: 364
			},
			{
				name: 'NIXE Extra Dry',
				abv: 4.9,
				category: 'beer',
				calPerMl: 0.33435311973387233,
				id: 365
			},
			{
				name: 'Natty Daddy',
				abv: 8,
				category: 'beer',
				calPerMl: 0.5308589006300956,
				id: 366
			},
			{
				name: 'Natural Ice',
				abv: 5.9,
				category: 'beer',
				calPerMl: 0.3812798733807316,
				id: 367
			},
			{
				name: 'Natural Light',
				abv: 4.2,
				category: 'beer',
				calPerMl: 0.278627599778227,
				id: 368
			},
			{
				name: 'Negra Modelo',
				abv: 5.4,
				category: 'beer',
				calPerMl: 0.49859675749787985,
				id: 369
			},
			{
				name: 'New Belgium Sunshine Wheat',
				abv: 4.8,
				category: 'beer',
				calPerMl: 0.4252737049246622,
				id: 370
			},
			{
				name: 'New Planet 3R Raspberry Ale',
				abv: 5,
				category: 'beer',
				calPerMl: 0.46926753646859276,
				id: 371
			},
			{
				name: 'New Planet Off Grid Pale Ale',
				abv: 5,
				category: 'beer',
				calPerMl: 0.49859675749787985,
				id: 372
			},
			{
				name: 'New Planet Tread Lightly Ale',
				abv: 5,
				category: 'beer',
				calPerMl: 0.5249930564242382,
				id: 373
			},
			{
				name: 'Newcastle Brown Ale',
				abv: 4.7,
				category: 'beer',
				calPerMl: 0.4047432502041613,
				id: 374
			},
			{
				name: 'ODouls',
				abv: 0.4,
				category: 'beer',
				calPerMl: 0.1906399366903658,
				id: 375
			},
			{
				name: 'ODouls Amber',
				abv: 0.4,
				category: 'beer',
				calPerMl: 0.2639629892635834,
				id: 376
			},
			{
				name: 'Old Milwaukee Beer',
				abv: 4.5,
				category: 'beer',
				calPerMl: 0.42820662702759094,
				id: 377
			},
			{
				name: 'Old Milwaukee Light',
				abv: 3.8,
				category: 'beer',
				calPerMl: 0.33435311973387233,
				id: 378
			},
			{
				name: 'Olde English 800',
				abv: 5.9,
				category: 'beer',
				calPerMl: 0.46926753646859276,
				id: 379
			},
			{
				name: 'Olde English 800 7.5',
				abv: 7.5,
				category: 'beer',
				calPerMl: 0.5924502647915983,
				id: 380
			},
			{
				name: 'Olde English High Gravity 800',
				abv: 8,
				category: 'beer',
				calPerMl: 0.6452428626443151,
				id: 381
			},
			{
				name: 'Ozeki Sake (Regular Type)',
				abv: 16,
				category: 'wine',
				calPerMl: 1.0769689961954205,
				id: 382
			},
			{
				name: 'Pabst Blue Ribbon',
				abv: 4.74,
				category: 'beer',
				calPerMl: 0.4223407828217335,
				id: 383
			},
			{
				name: 'Pabst Blue Ribbon Light',
				abv: 4.19,
				category: 'beer',
				calPerMl: 0.33142019763094366,
				id: 384
			},
			{
				name: 'Pacifico',
				abv: 4.4,
				category: 'beer',
				calPerMl: 0.4252737049246622,
				id: 385
			},
			{
				name: 'Parrot Bay Caribbean Coconut Rum',
				abv: 20,
				category: 'shot',
				calPerMl: 2.041313783638379,
				id: 386
			},
			{
				name: 'Pastis pure',
				abv: 45,
				category: 'shot',
				calPerMl: 3.378726262573868,
				id: 387
			},
			{
				name: 'Patron Anejo Tequila',
				abv: 40,
				category: 'shot',
				calPerMl: 2.2994109286961044,
				id: 388
			},
			{
				name: 'Patron Gran Patron Burdeos Anejo',
				abv: 40,
				category: 'shot',
				calPerMl: 2.2994109286961044,
				id: 389
			},
			{
				name: 'Patron Silver Tequila',
				abv: 40,
				category: 'shot',
				calPerMl: 2.322874305519534,
				id: 390
			},
			{
				name: 'Paulaner Hefe-Weizen',
				abv: 5.5,
				category: 'beer',
				calPerMl: 0.48979799118909373,
				id: 391
			},
			{
				name: 'Paulaner Munich Premium Lager',
				abv: 4.9,
				category: 'beer',
				calPerMl: 0.437005393336377,
				id: 392
			},
			{
				name: 'Paulaner Oktoberfest Marzen',
				abv: 5.8,
				category: 'beer',
				calPerMl: 0.5191272122183808,
				id: 393
			},
			{
				name: 'Pendleton Whisky',
				abv: 40,
				category: 'shot',
				calPerMl: 2.2524841750492453,
				id: 394
			},
			{
				name: 'Peroni Nastro Azzurro',
				abv: 5.1,
				category: 'beer',
				calPerMl: 0.4399383154393057,
				id: 395
			},
			{
				name: 'Petes Wicked Ale',
				abv: 5.3,
				category: 'beer',
				calPerMl: 0.5103284459095947,
				id: 396
			},
			{
				name: 'Pigs Eye Ice Beer',
				abv: 5.9,
				category: 'beer',
				calPerMl: 0.39301156179244645,
				id: 397
			},
			{
				name: 'Pigs Eye Lean Light',
				abv: 4.2,
				category: 'beer',
				calPerMl: 0.278627599778227,
				id: 398
			},
			{
				name: 'Pigs Eye P.B. High Gravity Ice Malt Liquour',
				abv: 10.2,
				category: 'beer',
				calPerMl: 0.6833708499823883,
				id: 399
			},
			{
				name: 'Pilsner Urquell',
				abv: 4.4,
				category: 'beer',
				calPerMl: 0.45753584805687797,
				id: 400
			},
			{
				name: 'Pina Colada (blended)',
				abv: 10,
				category: 'beer',
				calPerMl: 1.073449489671906,
				id: 401
			},
			{
				name: 'Pina Colada - Bartles & Jaymes',
				abv: 3.6,
				category: 'beer',
				calPerMl: 0.7918889677907504,
				id: 402
			},
			{
				name: 'Pinot Noir (Beaulieu Vineyard)',
				abv: 13.7,
				category: 'wine',
				calPerMl: 1.0628909701013627,
				id: 403
			},
			{
				name: 'Popov Vodka 100 proof',
				abv: 50,
				category: 'shot',
				calPerMl: 2.8390685956349864,
				id: 404
			},
			{
				name: 'Popov Vodka 80 proof',
				abv: 40,
				category: 'shot',
				calPerMl: 2.275947551872675,
				id: 405
			},
			{
				name: 'Pure Ethanol (!)',
				abv: 100,
				category: 'shot',
				calPerMl: 5.584283683976254,
				id: 406
			},
			{
				name: 'Pyramid Apricot Ale',
				abv: 5.1,
				category: 'beer',
				calPerMl: 0.48979799118909373,
				id: 407
			},
			{
				name: 'Pyramid Hefeweizen',
				abv: 5.2,
				category: 'beer',
				calPerMl: 0.4927309132920224,
				id: 408
			},
			{
				name: 'Pyramid Outburst IPA',
				abv: 8.5,
				category: 'beer',
				calPerMl: 0.7772243572761068,
				id: 409
			},
			{
				name: 'Pyramid ThunderHead IPA',
				abv: 6.7,
				category: 'beer',
				calPerMl: 0.636444096335529,
				id: 410
			},
			{
				name: 'Red Bridge Beer',
				abv: 4,
				category: 'beer',
				calPerMl: 0.37248110707194554,
				id: 411
			},
			{
				name: 'Red Dog',
				abv: 4.8,
				category: 'beer',
				calPerMl: 0.4311395491305196,
				id: 412
			},
			{
				name: 'Red Hook ESB',
				abv: 5.77,
				category: 'beer',
				calPerMl: 0.5249930564242382,
				id: 413
			},
			{
				name: 'Red Hook IPA',
				abv: 6.5,
				category: 'beer',
				calPerMl: 0.5513893553505965,
				id: 414
			},
			{
				name: 'Red Stripe',
				abv: 4.7,
				category: 'beer',
				calPerMl: 0.44287123754223445,
				id: 415
			},
			{
				name: 'Red Stripe Light',
				abv: 3.6,
				category: 'beer',
				calPerMl: 0.3636823407631594,
				id: 416
			},
			{
				name: 'Redds Apple Ale',
				abv: 5,
				category: 'beer',
				calPerMl: 0.4839321469832363,
				id: 417
			},
			{
				name: 'Rolling Rock Extra Pale',
				abv: 4.5,
				category: 'beer',
				calPerMl: 0.38714571758658906,
				id: 418
			},
			{
				name: 'Rum and Coke',
				abv: 8.75,
				category: 'beer',
				calPerMl: 0.8358827993346809,
				id: 419
			},
			{
				name: 'Rum and Diet Coke',
				abv: 8.75,
				category: 'beer',
				calPerMl: 0.5044626017037372,
				id: 420
			},
			{
				name: 'Rumple Minze - Peppermint',
				abv: 50,
				category: 'shot',
				calPerMl: 3.847993799042461,
				id: 421
			},
			{
				name: 'Sailor Jerry Spiced Navy Rum',
				abv: 46,
				category: 'shot',
				calPerMl: 2.7686784651646974,
				id: 422
			},
			{
				name: 'Sam Adams Light',
				abv: 4,
				category: 'beer',
				calPerMl: 0.3490177302485159,
				id: 423
			},
			{
				name: 'Sambuca Romana',
				abv: 42,
				category: 'shot',
				calPerMl: 4.035700813629898,
				id: 424
			},
			{
				name: 'Samuel Adams Boston Ale',
				abv: 5.4,
				category: 'beer',
				calPerMl: 0.5191272122183808,
				id: 425
			},
			{
				name: 'Samuel Adams Boston Lager',
				abv: 4.9,
				category: 'beer',
				calPerMl: 0.5132613680125233,
				id: 426
			},
			{
				name: 'Samuel Adams Cherry Wheat',
				abv: 5.3,
				category: 'beer',
				calPerMl: 0.516194290115452,
				id: 427
			},
			{
				name: 'Samuel Adams Chocolate Bock',
				abv: 5.8,
				category: 'beer',
				calPerMl: 0.6745720836736021,
				id: 428
			},
			{
				name: 'Samuel Adams Cream Stout',
				abv: 4.9,
				category: 'beer',
				calPerMl: 0.557255199556454,
				id: 429
			},
			{
				name: 'Samuel Adams Double Bock',
				abv: 9.5,
				category: 'beer',
				calPerMl: 0.9473338392459717,
				id: 430
			},
			{
				name: 'Samuel Adams Noble Pils',
				abv: 4.9,
				category: 'beer',
				calPerMl: 0.4956638353949511,
				id: 431
			},
			{
				name: 'Samuel Adams Pale Ale',
				abv: 5.4,
				category: 'beer',
				calPerMl: 0.46926753646859276,
				id: 432
			},
			{
				name: 'Samuel Adams Winter Lager',
				abv: 5.6,
				category: 'beer',
				calPerMl: 0.56605396586524,
				id: 433
			},
			{
				name: 'Sapporo Premium',
				abv: 4.9,
				category: 'beer',
				calPerMl: 0.4106090944100187,
				id: 434
			},
			{
				name: 'Sapporo Premium Light',
				abv: 3.9,
				category: 'beer',
				calPerMl: 0.3490177302485159,
				id: 435
			},
			{
				name: 'Sauvingnon Blanc',
				abv: 13.3,
				category: 'wine',
				calPerMl: 1.0065788657251316,
				id: 436
			},
			{
				name: 'Sayuri Nigori Sake',
				abv: 12.5,
				category: 'wine',
				calPerMl: 0.9854618265840449,
				id: 437
			},
			{
				name: 'Schlitz Beer',
				abv: 4.7,
				category: 'beer',
				calPerMl: 0.42820662702759094,
				id: 438
			},
			{
				name: 'Schlitz Light',
				abv: 4.2,
				category: 'beer',
				calPerMl: 0.32262143132215754,
				id: 439
			},
			{
				name: 'Schlitz Malt Liquor',
				abv: 6.2,
				category: 'beer',
				calPerMl: 0.5425905890418103,
				id: 440
			},
			{
				name: 'Screwdriver',
				abv: 13.3,
				category: 'beer',
				calPerMl: 1.082248255980692,
				id: 441
			},
			{
				name: 'Seagrams 7',
				abv: 40,
				category: 'shot',
				calPerMl: 2.4401911896366824,
				id: 442
			},
			{
				name: 'Sharps',
				abv: 0.4,
				category: 'beer',
				calPerMl: 0.1701094819698649,
				id: 443
			},
			{
				name: 'Sheaf Stout',
				abv: 5.7,
				category: 'beer',
				calPerMl: 0.5513893553505965,
				id: 444
			},
			{
				name: 'Shiner Blonde',
				abv: 4.4,
				category: 'beer',
				calPerMl: 0.4106090944100187,
				id: 445
			},
			{
				name: 'Shiner Bock',
				abv: 4.4,
				category: 'beer',
				calPerMl: 0.4164749386158761,
				id: 446
			},
			{
				name: 'Shiner Hefeweizen',
				abv: 5.4,
				category: 'beer',
				calPerMl: 0.5103284459095947,
				id: 447
			},
			{
				name: 'Shiner Light',
				abv: 4,
				category: 'beer',
				calPerMl: 0.35195065235144457,
				id: 448
			},
			{
				name: 'Shiner Light Blonde',
				abv: 4.2,
				category: 'beer',
				calPerMl: 0.2903592881899418,
				id: 449
			},
			{
				name: 'Shock Top Belgian White',
				abv: 5.2,
				category: 'beer',
				calPerMl: 0.48979799118909373,
				id: 450
			},
			{
				name: 'Shock Top Pumpkin',
				abv: 5.2,
				category: 'beer',
				calPerMl: 0.4751333806744502,
				id: 451
			},
			{
				name: 'Shock Top Rasberry Wheat',
				abv: 5.2,
				category: 'beer',
				calPerMl: 0.5249930564242382,
				id: 452
			},
			{
				name: 'Sierra Nevada Bigfoot',
				abv: 9.6,
				category: 'beer',
				calPerMl: 0.9678642939664726,
				id: 453
			},
			{
				name: 'Sierra Nevada Celebration Ale',
				abv: 6.8,
				category: 'beer',
				calPerMl: 0.6276453300267428,
				id: 454
			},
			{
				name: 'Sierra Nevada Hoptimum',
				abv: 10.4,
				category: 'beer',
				calPerMl: 0.9209375403196133,
				id: 455
			},
			{
				name: 'Sierra Nevada Pale Ale',
				abv: 5.6,
				category: 'beer',
				calPerMl: 0.5132613680125233,
				id: 456
			},
			{
				name: 'Sierra Nevada Summerfest Beer',
				abv: 5,
				category: 'beer',
				calPerMl: 0.46340169226273537,
				id: 457
			},
			{
				name: 'Sierra Nevada Torpedo',
				abv: 7.2,
				category: 'beer',
				calPerMl: 0.6921696162911743,
				id: 458
			},
			{
				name: 'Sinfire Cinnamon Whisky',
				abv: 39,
				category: 'shot',
				calPerMl: 2.6513615810475493,
				id: 459
			},
			{
				name: 'Skinny Girl Margarita',
				abv: 12.7,
				category: 'beer',
				calPerMl: 0.8798766308786115,
				id: 460
			},
			{
				name: 'Skinnygirl Bare Naked Vodka',
				abv: 30,
				category: 'shot',
				calPerMl: 1.759753261757223,
				id: 461
			},
			{
				name: 'Skinnygirl Cucumber Vodka',
				abv: 30,
				category: 'shot',
				calPerMl: 1.7832166385806525,
				id: 462
			},
			{
				name: 'Skinnygirl Island Coconut Vodka',
				abv: 30,
				category: 'shot',
				calPerMl: 1.8066800154040823,
				id: 463
			},
			{
				name: 'Skinnygirl Pina Colada',
				abv: 9.95,
				category: 'beer',
				calPerMl: 0.7801572793790355,
				id: 464
			},
			{
				name: 'Skinnygirl Red Wine',
				abv: 12,
				category: 'wine',
				calPerMl: 0.7039013047028893,
				id: 465
			},
			{
				name: 'Skinnygirl Rose Wine',
				abv: 12,
				category: 'wine',
				calPerMl: 0.7039013047028893,
				id: 466
			},
			{
				name: 'Skinnygirl Sangria',
				abv: 10.5,
				category: 'wine',
				calPerMl: 0.9291497222078138,
				id: 467
			},
			{
				name: 'Skinnygirl Tangerine Vodka',
				abv: 30,
				category: 'shot',
				calPerMl: 1.7832166385806525,
				id: 468
			},
			{
				name: 'Skinnygirl White Peach Margarita',
				abv: 12.7,
				category: 'beer',
				calPerMl: 0.874010786672754,
				id: 469
			},
			{
				name: 'Skinnygirl White Wine',
				abv: 12,
				category: 'wine',
				calPerMl: 0.7039013047028893,
				id: 470
			},
			{
				name: 'Skol',
				abv: 4.7,
				category: 'beer',
				calPerMl: 0.437005393336377,
				id: 471
			},
			{
				name: 'Sleeman Clear',
				abv: 4,
				category: 'beer',
				calPerMl: 0.2639629892635834,
				id: 472
			},
			{
				name: 'Smirnoff Ice',
				abv: 5,
				category: 'beer',
				calPerMl: 0.7068342268058179,
				id: 473
			},
			{
				name: 'Smirnoff Ice Light',
				abv: 3.2,
				category: 'beer',
				calPerMl: 0.2903592881899418,
				id: 474
			},
			{
				name: 'Smirnoff Sorbet Light Vodka (All Flavors)',
				abv: 30,
				category: 'shot',
				calPerMl: 1.8301433922275119,
				id: 475
			},
			{
				name: 'Smirnoff Twist of Green Apple Vodka',
				abv: 35,
				category: 'shot',
				calPerMl: 2.1820940445789563,
				id: 476
			},
			{
				name: 'Smirnoff Twist of Raspberry Vodka',
				abv: 35,
				category: 'shot',
				calPerMl: 2.135167290932097,
				id: 477
			},
			{
				name: 'Smirnoff Vodka Blue Label 100 Proof',
				abv: 50,
				category: 'shot',
				calPerMl: 2.8390685956349864,
				id: 478
			},
			{
				name: 'Smirnoff Vodka Red Label 80 Proof',
				abv: 40,
				category: 'shot',
				calPerMl: 2.275947551872675,
				id: 479
			},
			{
				name: 'Smirnoff Vodka Silver Label 90 Proof',
				abv: 45.2,
				category: 'shot',
				calPerMl: 2.5809714505772603,
				id: 480
			},
			{
				name: 'Smithwicks Draught',
				abv: 4.5,
				category: 'beer',
				calPerMl: 0.3754140291748742,
				id: 481
			},
			{
				name: 'Southern Comfort (70 proof)',
				abv: 35,
				category: 'shot',
				calPerMl: 2.463654566460112,
				id: 482
			},
			{
				name: 'Southwark Bitter',
				abv: 4.5,
				category: 'beer',
				calPerMl: 0.3959444838953752,
				id: 483
			},
			{
				name: 'Sparks',
				abv: 6,
				category: 'beer',
				calPerMl: 0.7332305257321762,
				id: 484
			},
			{
				name: 'Sparks Blackberry',
				abv: 8,
				category: 'beer',
				calPerMl: 0.8417486435405382,
				id: 485
			},
			{
				name: 'Sparks Iced Tea',
				abv: 8,
				category: 'beer',
				calPerMl: 0.8153523446141799,
				id: 486
			},
			{
				name: 'Sparks Lemonade',
				abv: 8,
				category: 'beer',
				calPerMl: 0.7684255909673207,
				id: 487
			},
			{
				name: 'Sparks Light',
				abv: 6,
				category: 'beer',
				calPerMl: 0.3900786396895177,
				id: 488
			},
			{
				name: 'Sparks Plus 6%',
				abv: 6,
				category: 'beer',
				calPerMl: 0.7566939025556059,
				id: 489
			},
			{
				name: 'Sparks Plus 7%',
				abv: 7,
				category: 'beer',
				calPerMl: 0.844681565643467,
				id: 490
			},
			{
				name: 'Spaten Lager',
				abv: 5.2,
				category: 'beer',
				calPerMl: 0.46926753646859276,
				id: 491
			},
			{
				name: 'St. Pauli Girl - Lager',
				abv: 4.9,
				category: 'beer',
				calPerMl: 0.43407247123344833,
				id: 492
			},
			{
				name: 'Steel Reserve High Gravity',
				abv: 8.1,
				category: 'beer',
				calPerMl: 0.6511087068501725,
				id: 493
			},
			{
				name: 'Steel Six',
				abv: 6,
				category: 'beer',
				calPerMl: 0.46926753646859276,
				id: 494
			},
			{
				name: 'Steinlager Classic',
				abv: 5,
				category: 'beer',
				calPerMl: 0.42820662702759094,
				id: 495
			},
			{
				name: 'Stella Artois',
				abv: 5.2,
				category: 'beer',
				calPerMl: 0.44873708174809185,
				id: 496
			},
			{
				name: 'Stella Rosa',
				abv: 5.5,
				category: 'wine',
				calPerMl: 0.8376425525964382,
				id: 497
			},
			{
				name: 'Stirrings Triple Sec',
				abv: 30,
				category: 'shot',
				calPerMl: 2.60443482740069,
				id: 498
			},
			{
				name: 'Stolichnaya Vodka',
				abv: 40,
				category: 'shot',
				calPerMl: 2.2524841750492453,
				id: 499
			},
			{
				name: 'Strawberry Daiquiri (blended)',
				abv: 9.36,
				category: 'beer',
				calPerMl: 0.6599074731589586,
				id: 500
			},
			{
				name: 'Strawberry Daiquiri - Bartles & Jaymes',
				abv: 3.6,
				category: 'beer',
				calPerMl: 0.6452428626443151,
				id: 501
			},
			{
				name: 'Strohs',
				abv: 4.52,
				category: 'beer',
				calPerMl: 0.4164749386158761,
				id: 502
			},
			{
				name: 'Strongbow Cider (USA variant)',
				abv: 5,
				category: 'beer',
				calPerMl: 0.4106090944100187,
				id: 503
			},
			{
				name: 'Strongbow Dry Cider',
				abv: 5,
				category: 'beer',
				calPerMl: 0.4164749386158761,
				id: 504
			},
			{
				name: 'Swan Draught',
				abv: 4.5,
				category: 'beer',
				calPerMl: 0.3754140291748742,
				id: 505
			},
			{
				name: 'Syrah Wine',
				abv: 12.5,
				category: 'wine',
				calPerMl: 0.8587595917375248,
				id: 506
			},
			{
				name: 'TGIF - On The Rocks Mai Tai',
				abv: 12.5,
				category: 'beer',
				calPerMl: 1.1907663737890541,
				id: 507
			},
			{
				name: 'TGIF - On The Rocks Mudslide',
				abv: 10,
				category: 'wine',
				calPerMl: 2.146898979343812,
				id: 508
			},
			{
				name: 'TGIF - On The Rocks White Russian',
				abv: 12.5,
				category: 'wine',
				calPerMl: 2.1328209532497544,
				id: 509
			},
			{
				name: 'Tanqueray London Dry Gin',
				abv: 47.3,
				category: 'shot',
				calPerMl: 2.7217517115178382,
				id: 510
			},
			{
				name: 'Tecate',
				abv: 4.25,
				category: 'beer',
				calPerMl: 0.4047432502041613,
				id: 511
			},
			{
				name: 'Tennents Lager',
				abv: 4,
				category: 'beer',
				calPerMl: 0.34315188604265845,
				id: 512
			},
			{
				name: 'Tennents Original Export Lager',
				abv: 4.7,
				category: 'beer',
				calPerMl: 0.4164749386158761,
				id: 513
			},
			{
				name: 'Tennents Special',
				abv: 3.5,
				category: 'beer',
				calPerMl: 0.33728604183680105,
				id: 514
			},
			{
				name: 'Tennents Sweetheart Stout',
				abv: 2,
				category: 'beer',
				calPerMl: 0.35781649655730197,
				id: 515
			},
			{
				name: 'Tequiza',
				abv: 4.5,
				category: 'beer',
				calPerMl: 0.37248110707194554,
				id: 516
			},
			{
				name: 'Third Shift Amber Lager',
				abv: 5.3,
				category: 'beer',
				calPerMl: 0.5337918227330243,
				id: 517
			},
			{
				name: 'Three Olives Naked Vodka',
				abv: 40,
				category: 'shot',
				calPerMl: 2.322874305519534,
				id: 518
			},
			{
				name: 'Tilt Green 10%',
				abv: 10,
				category: 'beer',
				calPerMl: 1.252357737950557,
				id: 519
			},
			{
				name: 'Tilt Green 8%',
				abv: 8,
				category: 'beer',
				calPerMl: 1.014791047613332,
				id: 520
			},
			{
				name: 'Tilt Orange 4.0% ABV',
				abv: 4,
				category: 'beer',
				calPerMl: 0.9004070855991124,
				id: 521
			},
			{
				name: 'Tilt Purple 12%',
				abv: 12,
				category: 'beer',
				calPerMl: 1.5427170261404988,
				id: 522
			},
			{
				name: 'Tilt Red 12%',
				abv: 12,
				category: 'beer',
				calPerMl: 1.2494248158476282,
				id: 523
			},
			{
				name: 'Tooheys New',
				abv: 4.6,
				category: 'beer',
				calPerMl: 0.3959444838953752,
				id: 524
			},
			{
				name: 'Tooheys Old',
				abv: 4.4,
				category: 'beer',
				calPerMl: 0.38421279548366033,
				id: 525
			},
			{
				name: 'Trippel Belgian Style Ale',
				abv: 7.8,
				category: 'beer',
				calPerMl: 0.6481757847472438,
				id: 526
			},
			{
				name: 'Tsingtao',
				abv: 4.8,
				category: 'beer',
				calPerMl: 0.46046877015980664,
				id: 527
			},
			{
				name: 'Tuaca Liqueur',
				abv: 35,
				category: 'shot',
				calPerMl: 2.5809714505772603,
				id: 528
			},
			{
				name: 'Tusker Lager',
				abv: 4.2,
				category: 'beer',
				calPerMl: 0.3754140291748742,
				id: 529
			},
			{
				name: 'Twisted Tea Light - Hard Iced Tea',
				abv: 4,
				category: 'beer',
				calPerMl: 0.33728604183680105,
				id: 530
			},
			{
				name: 'Tyskie',
				abv: 5.6,
				category: 'beer',
				calPerMl: 0.44873708174809185,
				id: 531
			},
			{
				name: 'ULLR Nodic Libation',
				abv: 45,
				category: 'shot',
				calPerMl: 3.566433277161305,
				id: 532
			},
			{
				name: 'Valima Lager',
				abv: 4.9,
				category: 'beer',
				calPerMl: 0.4164749386158761,
				id: 533
			},
			{
				name: 'Vermouth - Martini Rosso Vermouth',
				abv: 16,
				category: 'shot',
				calPerMl: 1.5485828703463562,
				id: 534
			},
			{
				name: 'Victoria',
				abv: 4.04,
				category: 'beer',
				calPerMl: 0.3959444838953752,
				id: 535
			},
			{
				name: 'Victoria Bitter',
				abv: 4.6,
				category: 'beer',
				calPerMl: 0.3959444838953752,
				id: 536
			},
			{
				name: 'Vodka - Royal Gate (generic) 80 proof',
				abv: 40,
				category: 'shot',
				calPerMl: 2.275947551872675,
				id: 537
			},
			{
				name: 'Vodka and Diet Coke',
				abv: 13.3,
				category: 'beer',
				calPerMl: 0.7566939025556059,
				id: 538
			},
			{
				name: 'Vodka and Red Bull',
				abv: 13.3,
				category: 'beer',
				calPerMl: 1.073449489671906,
				id: 539
			},
			{
				name: 'Vodka and Red Bull Sugar Free',
				abv: 13.3,
				category: 'beer',
				calPerMl: 0.7860231235848929,
				id: 540
			},
			{
				name: 'Vodka and Rockstar',
				abv: 13.3,
				category: 'beer',
				calPerMl: 1.1702359190685532,
				id: 541
			},
			{
				name: 'Vodka and Rockstar Diet',
				abv: 13.3,
				category: 'beer',
				calPerMl: 0.7889560456878216,
				id: 542
			},
			{
				name: 'Warsteiner Premium Dunkel',
				abv: 4.8,
				category: 'beer',
				calPerMl: 0.45753584805687797,
				id: 543
			},
			{
				name: 'Warsteiner Premium Verum',
				abv: 4.8,
				category: 'beer',
				calPerMl: 0.44873708174809185,
				id: 544
			},
			{
				name: 'West End Draught',
				abv: 4.5,
				category: 'beer',
				calPerMl: 0.38421279548366033,
				id: 545
			},
			{
				name: 'White Russian',
				abv: 17.7,
				category: 'wine',
				calPerMl: 2.16097700543787,
				id: 546
			},
			{
				name: 'Wild Turkey 101',
				abv: 50.5,
				category: 'shot',
				calPerMl: 2.9094587261052753,
				id: 547
			},
			{
				name: 'Wild Turkey 80',
				abv: 40,
				category: 'shot',
				calPerMl: 2.2994109286961044,
				id: 548
			},
			{
				name: 'Wyders Apple Cider',
				abv: 5,
				category: 'beer',
				calPerMl: 0.4399383154393057,
				id: 549
			},
			{
				name: 'Wyders Pear Cider',
				abv: 4,
				category: 'beer',
				calPerMl: 0.4106090944100187,
				id: 550
			},
			{
				name: 'Wyders Raspberry Cider',
				abv: 4,
				category: 'beer',
				calPerMl: 0.35195065235144457,
				id: 551
			},
			{
				name: 'XXXX Bitter',
				abv: 4.6,
				category: 'beer',
				calPerMl: 0.38421279548366033,
				id: 552
			},
			{
				name: 'Yazi Ginger Vodka',
				abv: 35,
				category: 'shot',
				calPerMl: 2.416727812813253,
				id: 553
			},
			{
				name: 'Yuengling Black & Tan',
				abv: 4.8,
				category: 'beer',
				calPerMl: 0.46340169226273537,
				id: 554
			},
			{
				name: 'Yuengling Chesterfield Ale',
				abv: 5.2,
				category: 'beer',
				calPerMl: 0.5425905890418103,
				id: 555
			},
			{
				name: 'Yuengling Lager',
				abv: 4.6,
				category: 'beer',
				calPerMl: 0.4164749386158761,
				id: 556
			},
			{
				name: 'Yuengling Light Lager',
				abv: 3.5,
				category: 'beer',
				calPerMl: 0.2903592881899418,
				id: 557
			},
			{
				name: 'Yuengling Porter',
				abv: 4.8,
				category: 'beer',
				calPerMl: 0.4751333806744502,
				id: 558
			},
			{
				name: 'Yuengling Premium',
				abv: 4.6,
				category: 'beer',
				calPerMl: 0.4164749386158761,
				id: 559
			},
			{
				name: 'Yuengling Premium Light',
				abv: 3.3,
				category: 'beer',
				calPerMl: 0.28742636608701305,
				id: 560
			},
			{
				name: 'Yukon Jack',
				abv: 50,
				category: 'shot',
				calPerMl: 3.824530422219031,
				id: 561
			},
			{
				name: 'Zima',
				abv: 4.94,
				category: 'beer',
				calPerMl: 0.6775050057765308,
				id: 562
			}
		]);
}(angular));