import {expect} from 'chai';
import * as hiviTheme from '../../../../../src/modules/templates/uap/themes/hivi';
import ResolvedState from '../../../../../src/modules/templates/uap/resolved-state';
import SlotTweaker from 'ad-engine/src/services/slot-tweaker';
import sinon from 'sinon';


function getSlotElement() {
	return {
		appendChild: () => {
		},
		classList: {
			contains: () => false,
			add: () => {
			}
		},
		style: {},
		offsetWidth: 1920
	};
}

function getAdSlotObject() {
	return {
		getElement: () => getSlotElement(),
		getId: () => 'TOP_LEADERBOARD'
	};
}

const RESOLVED_STATE_PADDING = '10%';

function getParams() {
	return {
		'type': 'bfaa',
		'player': 'porvata',
		'isMobile': false,
		'config': {
			'aspectRatio': {'default': 4, 'resolved': 10},
			'background': {
				'default': 'default-state-image.jpg',
				'resolved': 'resolved-state-image.jpg'
			},
			'state': {
				'height': {'default': 92, 'resolved': 100},
				'top': {'default': 4, 'resolved': 0}
			}
		},
		'slotName': 'TOP_LEADERBOARD',
		'src': 'test',
		'uap': '4466763538',
		'lineItemId': '4466763538',
		'creativeId': '138218898006',
		'isSticky': true,
		'backgroundColor': '#000',
		'autoPlay': true,
		'resolvedStateAutoplay': true,
		'videoTriggers': [],
		'videoPlaceholderElement': {},
		'splitLayoutVideoPosition': 'right',
		'image1': {
			'element': {},
			'background': 'default-state-image.jpg'
		},
		'image2': {
			'element': {
				'classList': {
					'contains': () => false,
					'remove': () => {
					}
				}
			},
			'background': 'resolved-state-image.jpg'
		},
		'adContainer': {
			classList: {
				contains: () => false
			}
		},
		'thumbnail': {
			style: {}
		},
		'aspectRatio': 4,
		'resolvedStateAspectRatio': 10,
		'videoAspectRatio': 1.7777777777777777,
		'theme': 'hivi',
		'isDarkTheme': false,
		'clickThroughURL': 'http://fandom.com',
		'fullscreenable': true,
		'loadMedrecFromBTF': false,
		'moatTracking': 1,
		'adProduct': 'vuap'
	};
};

describe('UAP:HiVi template', () => {
	let sandbox;

	beforeEach(function () {
		sandbox = sinon.sandbox.create();

		sandbox.stub(SlotTweaker, 'onReady').returns({then: () => {}});
		sandbox.stub(SlotTweaker, 'makeResponsive');
		sandbox.stub(ResolvedState, 'isResolvedState');
		sandbox.stub(global.window, 'scrollBy');
		sandbox.stub(global.window, 'addEventListener');
		global.document.body.style = new CSSStyleDeclaration();

		SlotTweaker.onReady.returns({then: () => {}});
		SlotTweaker.makeResponsive.returns({then: () => {}});
		global.window.scrollBy.returns(null);
		global.window.addEventListener.returns(null);
	});

	afterEach(function () {
		sandbox.restore();
	});

	it('should left padding empty for default state (BFAA handles it)', () => {
		let adSlot = getAdSlotObject();
		let theme = new hiviTheme.BfaaTheme(adSlot, getParams());
		ResolvedState.isResolvedState.returns(false);

		theme.onAdReady();
		expect(document.body.style.paddingTop).to.equal('');
	});

	it('should set correct padding for resolved state', () => {
		let adSlot = getAdSlotObject();
		let theme = new hiviTheme.BfaaTheme(adSlot, getParams());
		ResolvedState.isResolvedState.returns(true);

		theme.onAdReady();

		expect(document.body.style.paddingTop).to.equal(RESOLVED_STATE_PADDING);
	});
});
