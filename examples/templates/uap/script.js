import AdEngine from 'ad-engine/ad-engine';
import TemplateService from 'ad-engine/services/template-service';

import BigFancyAdAbove from 'ad-products/modules/templates/uap/big-fancy-ad-above';
import FloatingRail from 'ad-products/modules/templates/floating-rail';

import customContext from '../../context';

customContext.targeting.artid = '321';

TemplateService.register(BigFancyAdAbove);
TemplateService.register(FloatingRail, {
	startOffset: -15
});

new AdEngine(customContext).init();
