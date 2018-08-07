import { AdEngine, context, templateService, utils } from '@wikia/ad-engine';
import { PorvataTemplate } from '@wikia/ad-products';

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


templateService.register(PorvataTemplate, {
	isFloatingEnabled: utils.queryString.get('floating') !== '0',
	inViewportOffsetTop: 58
});

new AdEngine().init();
