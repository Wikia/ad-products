import { context } from '@wikia/ad-engine';
import { BaseAdapter } from './base-adapter';

export class Appnexus extends BaseAdapter {
	constructor(options) {
		super(options);

		this.bidderName = 'appnexus';
		this.placements = options.placements;
		this.recPlacements = options.recPlacements;
	}

	prepareConfigForAdUnit(code, { sizes, position = 'mobile' }) {
		return {
			code,
			mediaTypes: {
				banner: {
					sizes
				}
			},
			bids: [
				{
					bidder: this.bidderName,
					params: {
						placementId: this.getPlacement(position)
					}
				}
			]
		};
	}

	getPlacement(position) {
		if (position === 'mobile') {
			const vertical = context.get('targeting.mappedVerticalName');

			position = vertical && this.placements[vertical] ? vertical : 'other';
		}

		// ToDo: Recovery detection
		if (this.recPlacements && context.get('targeting.rec')) {
			return this.recPlacements[position];
		}

		return this.placements[position];
	}
}
