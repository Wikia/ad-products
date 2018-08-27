import { AdEngine, context, templateService, utils, events } from '@wikia/ad-engine';
import { bidders, PorvataTemplate } from '@wikia/ad-products';

import customContext from '../../context';
import '../../styles.scss';

context.extend(customContext);

context.set('targeting.artid', '503');
context.set('slots.incontent_boxad.disabled', false);

context.push('listeners.slot', {
	onStatusChanged: (adSlot) => {
		console.log(`⛳ ${adSlot.getSlotName()}: %c${adSlot.getStatus()}`, 'font-weight: bold');
	}
});
context.push('listeners.porvata', {
	onEvent: (eventName) => {
		console.log(`🎬 Porvata: %c${eventName}`, 'font-weight: bold');
	}
});

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

templateService.register(PorvataTemplate, {
	isFloatingEnabled: utils.queryString.get('floating') !== '0',
	inViewportOffsetTop: 58
});

events.on(events.AD_SLOT_CREATED, (slot) => {
	bidders.updateSlotTargeting(slot.getSlotName());
});

new AdEngine().init();
