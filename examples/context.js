export default {
	adUnitId: '/5441/wka.life/_project43//{custom.namespace}/gpt/{slotName}',
	custom: {
		namespace: 'article'
	},
	events: {
		pushOnScroll: {
			ids: [
				'gpt-incontent-boxad',
				'gpt-bottom-leaderboard'
			],
			threshold: 100
		}
	},
	slots: {
		'top-leaderboard': {
			slotName: 'TOP_LEADERBOARD',
			aboveTheFold: true,
			sizes: [
				{
					viewportSize: [728, 0],
					sizes: [[728, 90], [3, 3]]
				}
			],
			defaultSizes: [[300, 250], [2, 2]],
			targeting: {
				loc: 'top'
			}
		},
		'top-boxad': {
			slotName: 'TOP_BOXAD',
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
		'incontent-boxad': {
			disabled: true,
			slotName: 'INCONTENT_BOXAD',
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
		'bottom-leaderboard': {
			disabled: true,
			slotName: 'BOTTOM_LEADERBOARD',
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
		adUnitId: '/5441/wka.life/_project43//{custom.namespace}/gpt/{pos}'
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
