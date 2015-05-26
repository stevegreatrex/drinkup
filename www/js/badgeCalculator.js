(function(angular) {
	angular.module('drinkup.badgeCalculator', [])

		.factory('BadgeCalculator', function($rootScope, SessionEvents) {
			function BadgeCalculator() {}

			BadgeCalculator._badgeDefinitions = [];

			BadgeCalculator.addBadge = function(badgeGenerator) {
				BadgeCalculator._badgeDefinitions.push(badgeGenerator);
			};

			BadgeCalculator.prototype.getBadges = function(session) {
				var badges = [];
				BadgeCalculator._badgeDefinitions.forEach(function(generator) {
					var generatedBadges = generator(session);
					if (!generatedBadges) return;
					if (angular.isArray(generatedBadges)) {
						badges = badges.concat(generatedBadges);
					} else {
						badges.push(generatedBadges);
					}
				});

				return badges;
			};

			BadgeCalculator.prototype.applyBadges = function(session) {
				var badges = this.getBadges(session) || [];
				session.badges = session.badges || [];
				badges.forEach(function(badge) {
					if (session.badges.filter(function(b) { return b.id == badge.id; }).length)
						return;

					session.badges.push(badge);
					$rootScope.$broadcast(SessionEvents.badgeAdded, session, badge);
				});
			};

			BadgeCalculator._badgeDefinitions.push(function(session) {
				if ((session.drinks || []).filter(function(d) { return d.drinkType.category === 'beer'; }).length) {
					return {
						name: 'Keg Tapper',
						level: 1
					};
				}
			});

			BadgeCalculator._badgeDefinitions.push(function(session) {
				if ((session.drinks || []).filter(function(d) { return d.drinkType.category === 'wine'; }).length) {
					return {
						name: 'Grape Expectations',
						level: 1
					};
				}
			});

			return BadgeCalculator;
		})

		.service('badgeCalculator', function($rootScope, BadgeCalculator, SessionEvents) {
			var calculator = new BadgeCalculator();

			$rootScope.$on(SessionEvents.drinkAdded, function(event, session) {
				calculator.applyBadges(session);
			});

			return calculator;
		});
}(angular));
