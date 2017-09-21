import AdEngine from 'ad-engine/src/ad-engine';
import TemplateService from 'ad-engine/src/services/template-service';

import FloatingRail from 'ad-products/modules/templates/floating-rail';

import customContext from '../../context';

customContext.targeting.artid = '264';

TemplateService.register(FloatingRail, {
	startOffset: -15
});

new AdEngine(customContext).init();
