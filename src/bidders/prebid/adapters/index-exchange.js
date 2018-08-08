import { context } from '@wikia/ad-engine';
import { BaseAdapter } from './base-adapter';

export class IndexExchange extends BaseAdapter {
	constructor(options) {
		super(options);

		this.bidderName = 'indexExchange';
		this.aliases = {
			ix: [this.bidderName]
		};
		this.recPlacements = options.recPlacements;
	}

	prepareConfigForAdUnit(code, { sizes, siteId }) {
		return {
			code,
			mediaTypes: {
				banner: {
					sizes
				}
			},
			bids: sizes.map(size => ({
				bidder: this.bidderName,
				params: {
					siteId: this.recPlacements && context.get('custom.rec') ? this.recPlacements[code] : siteId,
					size
				}
			}))
		};
	}
}
