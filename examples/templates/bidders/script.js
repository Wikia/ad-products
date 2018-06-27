import { AdEngine, context } from '@wikia/ad-engine';
import { utils } from '@wikia/ad-products';
import { bidders } from '@wikia/bidders';

import customContext from '../../context';
import '../../styles.scss';

context.extend(customContext);

if (document.body.offsetWidth < 728) {
	context.set('state.isMobile', true);
	context.set('targeting.skin', 'fandom_mobile');
}

utils.setupNpaContext();

let resolveBidders;

const biddersDelay = {
	isEnabled: () => true,
	getName: () => 'bidders-delay',
	getPromise: () => new Promise((resolve) => {
		resolveBidders = resolve;
	})
};

context.set('slots.bottom_leaderboard.disabled', false);
context.set('options.maxDelayTimeout', 1000);
context.push('delayModules', biddersDelay);

bidders.requestBids({
	responseListener: () => {
		if (bidders.hasAllResponses()) {
			bidders.updateSlotsTargeting();
			if (resolveBidders) {
				resolveBidders();
				resolveBidders = null;
			}
		}
	}
});

new AdEngine().init();
