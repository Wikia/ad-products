import { AdEngine, context, templateService } from '@wikia/ad-engine';
import { PorvataTemplate } from '@wikia/ad-products';

import customContext from '../../context';
import '../../styles.scss';

context.extend(customContext);

context.set('targeting.artid', '401');
context.set('slots.incontent_boxad.disabled', false);

templateService.register(PorvataTemplate);

new AdEngine().init();
