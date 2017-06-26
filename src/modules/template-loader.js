'use strict';

import BigFancyAdAbove from './templates/uap/big-fancy-ad-above';
import BigFancyAdBelow from './templates/uap/big-fancy-ad-below';
import FloatingRail from './templates/floating-rail';

export default {
	load(params) {
		switch (params && params.type) {
			case 'bfaa':
				new BigFancyAdAbove(params).init();
				break;
			case 'bfab':
				new BigFancyAdBelow(params).init();
				break;
			case 'floatingRail':
				new FloatingRail(params).init();
				break;
			default:
				break;
		}
	}
}
