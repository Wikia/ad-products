import Context from 'ad-engine/services/context-service';

Context.extend({
	adUnitId: '/5441/wka.life/_project43//article/gpt/{slotName}',
	events: {
		pushOnScroll: {
			ids: [
				'gpt-incontent-boxad'
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
					sizes: [[728, 90]]
				}
			],
			defaultSizes: [[300, 250]],
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
			slotName: 'INCONTENT_BOXAD',
			sizes: [
				{
					viewportSize: [768, 0],
					sizes: [[300, 250], [300, 600]]
				}
			],
			defaultSizes: [[300, 250]],
			defaultTemplate: 'floating-ad',
			targeting: {
				loc: 'hivi'
			}
		}
	},
	vast: {
		adUnitId: '/5441/wka.fandom/_fandom//{custom.namespace}/{src}/{pos}'
	},
	templates: {
		floatingRail: {
			enabled: true,
			railSelector: '#rail',
			wrapperSelector: '#rail-wrapper',
			startOffset: -15
		}
	},
	state: {
		isMobile: false
	}
});

export default Context;
