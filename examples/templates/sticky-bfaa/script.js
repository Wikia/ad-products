import AdEngine from 'ad-engine/src/ad-engine';
import TemplateService from 'ad-engine/src/services/template-service';

import BigFancyAdAbove from 'ad-products/modules/templates/uap/big-fancy-ad-above';
import BigFancyAdBelow from 'ad-products/modules/templates/uap/big-fancy-ad-below';
import FloatingRail from 'ad-products/modules/templates/floating-rail';

import customContext from '../../context';

customContext.targeting.artid = '318'; //321

TemplateService.register(BigFancyAdAbove);
TemplateService.register(BigFancyAdBelow);
TemplateService.register(FloatingRail);

new AdEngine(customContext).init();
