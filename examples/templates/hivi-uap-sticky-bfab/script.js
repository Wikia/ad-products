import { AdEngine, context, templateService } from '@wikia/ad-engine';
import { BigFancyAdAbove, BigFancyAdBelow, FloatingRail, utils } from '@wikia/ad-products';

import customContext from '../../context';
import '../../styles.scss';

customContext.targeting.artid = '455';

context.extend(customContext);

if (document.body.offsetWidth < 728) {
	context.set('state.isMobile', true);
	context.set('targeting.skin', 'fandom_mobile');
}

utils.setupNpaContext();

context.push('listeners.slot', {
	onStatusChanged: (adSlot) => {
		console.log(`⛳ ${adSlot.getSlotName()}: %c${adSlot.getStatus()}`, 'font-weight: bold');
	}
});

templateService.register(BigFancyAdAbove);
templateService.register(BigFancyAdBelow, {
	stickinessAllowed: true
});
templateService.register(FloatingRail);

new AdEngine().init();
