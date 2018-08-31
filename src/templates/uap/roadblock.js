import { context } from '@wikia/ad-engine';

import { universalAdPackage } from './universal-ad-package';

export class Roadblock {
	static getName() {
		return 'roadblock';
	}

	static getDefaultConfig() {
		return {
			slotsToEnable: [],
			slotsToDisable: []
		};
	}

	constructor() {
		this.config = context.get('templates.roadblock');
	}

	/**
	 * Initializes the Roadblock unit
	 */
	init(params) {
		this.params = params;
		this.params.adProduct = 'ruap';

		universalAdPackage.setUapId(params.uap);
		universalAdPackage.setType('ruap');
		universalAdPackage.init(this.params, this.config.slotsToEnable, this.config.slotsToDisable);
	}
}
