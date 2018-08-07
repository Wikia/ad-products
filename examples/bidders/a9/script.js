import { AdEngine, context, events } from '@wikia/ad-engine';
import { utils } from '@wikia/ad-products';
import { bidders } from '@wikia/bidders';

import customContext from '../../context';
import '../../styles.scss';

const optIn = true;

window.__cmp = function (cmd, param, cb) {
	if (cmd === 'getConsentData') {
		cb({
			consentData: optIn ? 'BOQu5jyOQu5jyCNABAPLBR-AAAAeCAFgAUABYAIAAaABFACY' : 'BOQu5naOQu5naCNABAPLBRAAAAAeCAAA',
			gdprApplies: true,
			hasGlobalScope: false
		}, true);
	} else if (cmd === 'getVendorConsents') {
		cb({
			metadata: 'BOQu5naOQu5naCNABAAABRAAAAAAAA',
			purposeConsents: Array.from({length: 5}).reduce((map, val, i) => {
				map[i + 1] = optIn;
				return map;
			}, {}),
			vendorConsents: Array.from({length: 500}).reduce((map, val, i) => {
				map[i + 1] = optIn;
				return map;
			}, {})
		}, true);
	} else {
		cb(null, false);
	}
};

context.extend(customContext);
context.set('targeting.artid', '266');
context.set('slots.incontent_boxad.disabled', false);

utils.setupNpaContext();

let resolveBidders;

const biddersDelay = {
	isEnabled: () => true,
	getName: () => 'bidders-delay',
	getPromise: () => new Promise((resolve) => {
		resolveBidders = resolve;
	})
};

context.set('options.maxDelayTimeout', 1000);
context.push('delayModules', biddersDelay);

bidders.requestBids({
	responseListener: () => {
		if (bidders.hasAllResponses()) {
			if (resolveBidders) {
				resolveBidders();
				resolveBidders = null;
			}
		}
	}
});

events.on(events.AD_SLOT_CREATED, (slot) => {
	bidders.updateSlotTargeting(slot.getSlotName());
});

window.bidders = bidders;

document.getElementById('enableDebugMode').addEventListener('click', () => {
	window.apstag.debug('enable');
	window.location.reload();
});

document.getElementById('disableDebugMode').addEventListener('click', () => {
	window.apstag.debug('disable');
	window.location.reload();
});

new AdEngine().init();
