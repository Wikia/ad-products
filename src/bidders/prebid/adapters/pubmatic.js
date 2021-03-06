import { BaseAdapter } from './base-adapter';

export class Pubmatic extends BaseAdapter {
	constructor(options) {
		super(options);

		this.bidderName = 'pubmatic';
		this.publisherId = options.publisherId;
	}

	prepareConfigForAdUnit(code, { sizes, ids }) {
		return {
			code,
			mediaTypes: {
				banner: {
					sizes
				}
			},
			bids: ids.map(adSlot => ({
				bidder: this.bidderName,
				params: {
					adSlot,
					publisherId: this.publisherId
				}
			}))
		};
	}
}
