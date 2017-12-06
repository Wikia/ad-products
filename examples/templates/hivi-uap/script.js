import AdEngine from 'ad-engine/src/ad-engine';
import ContextService from 'ad-engine/src/services/context-service';
import TemplateService from 'ad-engine/src/services/template-service';

import BigFancyAdAbove from 'ad-products/modules/templates/uap/big-fancy-ad-above';
import BigFancyAdBelow from 'ad-products/modules/templates/uap/big-fancy-ad-below';
import FloatingRail from 'ad-products/modules/templates/floating-rail';

import customContext from '../../context';

customContext.targeting.artid = '455';

ContextService.extend(customContext);

if (document.body.offsetWidth < 728) {
	ContextService.set('state.isMobile', true);
	ContextService.set('targeting.skin', 'fandom_mobile');
}

TemplateService.register(BigFancyAdAbove);
TemplateService.register(BigFancyAdBelow);
TemplateService.register(FloatingRail);

new AdEngine().init();
