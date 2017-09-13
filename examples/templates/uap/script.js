import AdEngine from 'ad-engine/ad-engine';
import TemplateLoader from 'ad-products/modules/template-loader';

import Context from '../../context';

Context.set('state.adStack', window.adsQueue);
Context.set('targeting.s1', '_project43');
Context.set('targeting.artid', '321');
Context.set('targeting.uap', 'none');
Context.set('custom.namespace', 'article');
Context.set('templates.floatingRail.enabled', true);

new AdEngine().init();

window.loadCustomAd = TemplateLoader.load;
