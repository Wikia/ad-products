import { AdEngine, templateService } from '@wikia/ad-engine';
import { BigFancyAdAbove, BigFancyAdBelow, FloatingRail } from '@wikia/ad-products';

import customContext from '../../context';
import '../../styles.scss';

// http://project43.wikia.com/wiki/DevTemplates/VUAP/ResolveState
customContext.targeting.artid = '318';

templateService.register(BigFancyAdAbove);
templateService.register(BigFancyAdBelow);
templateService.register(FloatingRail);

new AdEngine(customContext).init();
