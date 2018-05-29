export default {
	src: 'test',
	adUnitId: '/5441/wka.life/_project43//{custom.namespace}/{slotConfig.targeting.src}/{slotConfig.slotName}',
	custom: {
		namespace: 'article'
	},
	events: {
		pushOnScroll: {
			ids: [
				'INCONTENT_BOXAD',
				'BOTTOM_LEADERBOARD'
			],
			threshold: 100
		}
	},
	options: {
		customAdLoader: {
			globalMethodName: 'loadCustomAd'
		},
		porvata: {
			audio: {
				exposeToSlot: true,
				segment: '-audio',
				key: 'audio'
			}
		},
		video: {
			moatTracking: {
				enabled: true,
				partnerCode: 'wikiaimajsint377461931603',
				sampling: 1
			}
		}
	},
	slots: {
		TOP_LEADERBOARD: {
			aboveTheFold: true,
			sizes: [
				{
					viewportSize: [728, 0],
					sizes: [[728, 90], [3, 3]]
				}
			],
			defaultSizes: [[2, 2]],
			targeting: {
				loc: 'top'
			}
		},
		TOP_BOXAD: {
			aboveTheFold: true,
			sizes: [
				{
					viewportSize: [768, 0],
					sizes: [[300, 250], [300, 600]]
				}
			],
			defaultSizes: [[300, 250]],
			targeting: {
				loc() {
					return window.innerWidth < 800 ? 'middle' : 'top';
				}
			}
		},
		INCONTENT_BOXAD: {
			disabled: true,
			sizes: [
				{
					viewportSize: [768, 0],
					sizes: [[300, 250], [300, 600]]
				}
			],
			defaultSizes: [[300, 250]],
			targeting: {
				loc: 'hivi'
			}
		},
		BOTTOM_LEADERBOARD: {
			disabled: true,
			sizes: [
				{
					viewportSize: [728, 0],
					sizes: [[728, 90]]
				}
			],
			defaultSizes: [[2, 2]],
			targeting: {
				loc: 'footer'
			}
		}
	},
	vast: {
		adUnitId: '/5441/wka.life/_project43//{custom.namespace}/{slotConfig.targeting.src}/{slotConfig.slotName}'
	},
	targeting: {
		outstream: 'none',
		s1: '_project43',
		uap: 'none'
	},
	state: {
		adStack: window.adsQueue,
		isMobile: false
	}
};
