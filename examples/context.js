import { slotService, utils } from '@wikia/ad-engine';

const disabledSlots = utils.queryString.get('disabled-slots');

if (disabledSlots) {
	disabledSlots.split(',').forEach(slotName => slotService.disable(slotName));
}

export default {
	src: 'test',
	adUnitId: '/5441/wka.life/_project43//{custom.namespace}/{slotConfig.targeting.src}/{slotConfig.slotName}',
	bidders: {
		timeout: 2000,
		a9: {
			enabled: true,
			videoEnabled: false,
			amazonId: '3115',
			slots: {
				top_leaderboard: [
					[728, 90]
				],
				top_boxad: [
					[300, 250]
				]
			},
			slotsVideo: []
		},
		prebid: {
			enabled: true,
			libraryUrl: '../../vendor/dist/prebid.min.js',
			lazyLoadingEnabled: false,
			bidsRefreshing: {
				enabled: true,
				slots: ['top_boxad']
			},
			wikia: {
				enabled: true,
				slots: {
					top_leaderboard: {
						sizes: [
							[728, 90]
						]
					},
					top_boxad: {
						sizes: [
							[300, 250]
						]
					},
					bottom_leaderboard: {
						sizes: [
							[728, 90]
						]
					}
				}
			},
			wikiaVideo: {
				enabled: true,
				slots: {
					featured: {},
					incontent_player: {}
				}
			}
		}
	},
	custom: {
		namespace: 'article'
	},
	events: {
		pushOnScroll: {
			ids: [
				'incontent_boxad',
				'bottom_leaderboard'
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
		},
		slotRepeater: true
	},
	services: {
		billTheLizard: {
			enabled: true,
			host: 'https://services.wikia-dev.pl',
			endpoint: 'bill-the-lizard/predict',
			projects: {
				queen_of_hearts: [
					{
						name: 'ctp_desktop:1.0.0',
						countries: ['XX/50'],
						on_0: ['logResult'],
						on_1: ['logResult']
					},
					{
						name: 'queen_of_hearts:0.0.1',
						countries: ['XX'],
						dfp_targeting: true,
						on_1: ['logResult']
					}
				]
			},
			parameters: {
				device: 'tablet',
				v1: 'Fgas3ooM',
				geo: 'PL',
				wiki_id: 245424,
				vtags: 'Twin Peaks',
				esrb: 'mature',
				s0v: 'tv',
				ref: 'direct',
				top_1k: 0,
				s2: 'article',
			},
			timeout: 2000
		}
	},
	slots: {
		top_leaderboard: {
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
		top_boxad: {
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
		incontent_boxad: {
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
		incontent_player: {
			defaultSizes: [[1, 1]],
			targeting: {
				loc: 'hivi'
			}
		},
		invisible_skin: {
			sizes: [
				{
					viewportSize: [768, 0],
					sizes: [[1000, 1000]]
				}
			],
			defaultSizes: [[1000, 1000]]
		},
		repeatable_boxad_1: {
			bidderAlias: 'top_boxad',
			defaultSizes: [[300, 250]],
			avoidConflictWith: '.repeatable-boxad',
			insertBeforeSelector: '.main p',
			repeat: {
				additionalClasses: 'hide',
				index: 1,
				limit: null,
				slotNamePattern: 'repeatable_boxad_{slotConfig.repeat.index}',
				updateProperties: {
					'targeting.rv': '{slotConfig.repeat.index}'
				}
			},
			sizes: [
				{
					viewportSize: [768, 0],
					sizes: [[300, 250], [300, 600]]
				}
			],
			targeting: {
				loc: 'hivi',
				pos: 'repeatable_boxad',
				rv: 1
			}
		},
		bottom_leaderboard: {
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
