import { AdEngine, context, templateService } from '@wikia/ad-engine';
import { BigFancyAdInPlayer } from '@wikia/ad-products';

import customContext from '../../context';
import '../../styles.scss';

let time = 10;

const clickDelay = {
		isEnabled: () => true,
		getName: () => 'click-to-load',
		getPromise: () => new Promise((resolve) => {
			document.getElementById('clickDelay').addEventListener('click', () => {
				loadCustomAd({
					type: 'bfp',
					slotName: 'FEATURED',
					uap: '4617193627'
				});
				resolve();
				time = 0;
			});
		})
	},
	interval = setInterval(() => {
		time -= 1;
		document.getElementById('clickDelay').innerText = 'Load UAP:JWP';
		if (time > 0) {
			document.getElementById('clickDelay').innerText += ` (${time}s)`;
		}
		if (time === 0) {
			clearInterval(interval);
		}
	}, 1000);

customContext.targeting.artid = '496';
customContext.slots['incontent-boxad'] = {
	disable: false,
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
};
customContext.slots['bottom-leaderboard'] = {
	disable: false,
	slotName: 'BOTTOM_LEADERBOARD',
	sizes: [
		{
			viewportSize: [728, 0],
			sizes: [[3, 3]]
		}
	],
	defaultSizes: [[2, 2]],
	targeting: {
		loc: 'footer'
	}
};

context.extend(customContext);
context.set('options.maxDelayTimeout', 10000);
context.push('delayModules', clickDelay);

if (document.body.offsetWidth < 728) {
	context.set('state.isMobile', true);
	context.set('targeting.skin', 'fandom_mobile');
}

templateService.register(BigFancyAdInPlayer);

new AdEngine().init();
