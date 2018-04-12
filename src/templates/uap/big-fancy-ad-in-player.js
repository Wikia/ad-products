import { context, utils } from '@wikia/ad-engine';

import { universalAdPackage } from './universal-ad-package';

export class BigFancyAdInPlayer {
	static getName() {
		return 'bfp';
	}

	static getDefaultConfig() {
		return {
			slotsToEnable: [
				'TOP_RIGHT_BOXAD',
				'INCONTENT_BOXAD'
			],
			onInit: () => {
			}
		};
	}

	constructor() {
		this.config = context.get('templates.bfp');
	}

	/**
	 * Initializes the BFP unit
	 */
	init(params) {
		this.params = params;

		universalAdPackage.setUapId(params.lineItemId);
		universalAdPackage.setType('jwp');
		this.config.onInit(this.params, this.config);
	}
}