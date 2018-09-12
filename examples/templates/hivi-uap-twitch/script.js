import { AdEngine, templateService } from '@wikia/ad-engine';
import { BigFancyAdTwitch } from '@wikia/ad-products';

import customContext from '../../context';
import '../../styles.scss';

customContext.targeting.artid = '415';

templateService.register(BigFancyAdTwitch);

new AdEngine(customContext).init();
