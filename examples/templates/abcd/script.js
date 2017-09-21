import AdEngine from 'ad-engine/src/ad-engine';
import TemplateService from 'ad-engine/src/services/template-service';

import BigFancyAdAbove from 'ad-products/modules/templates/uap/big-fancy-ad-above';

import customContext from '../../context';

customContext.targeting.artid = '390';

TemplateService.register(BigFancyAdAbove);

new AdEngine(customContext).init();
