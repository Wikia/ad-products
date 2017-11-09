import AdEngine from 'ad-engine/src/ad-engine';
import TemplateService from 'ad-engine/src/services/template-service';

import BigFancyAdAbove from 'ad-products/modules/templates/uap/big-fancy-ad-above';
import BigFancyAdBelow from 'ad-products/modules/templates/uap/big-fancy-ad-below';
import FloatingRail from 'ad-products/modules/templates/floating-rail';

import customContext from '../../context';

customContext.targeting.artid = '321';

TemplateService.register(BigFancyAdAbove, {
	onStickBfaaCallback: () => {
		const bfaa = document.getElementById('gpt-top-leaderboard');

		bfaa.classList.add('sticky-bfaa');

		setTimeout(() => {
			bfaa.style.top = 0;
			bfaa.style.transition = 'top 1s';
		}, 0);
	},
	onUnstickBfaaCallback: () => {
		const bfaa = document.getElementById('gpt-top-leaderboard'),
			adHeight = bfaa.offsetHeight;

		bfaa.style.top = `${window.scrollY === 0 ? 0 : -adHeight}px`;

		setTimeout(() => {
			bfaa.style['z-index'] = '';
			bfaa.style.top = '0';
			bfaa.classList.remove('sticky-bfaa');
		}, 1000);
	}
});

TemplateService.register(BigFancyAdBelow);
TemplateService.register(FloatingRail);

new AdEngine(customContext).init();
