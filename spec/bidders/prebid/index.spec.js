import { expect } from 'chai';
import { Prebid } from '../../../src/bidders/prebid/index'

const bidderConfig = {
	lazyLoadingEnabled: false,
	bidsRefreshing: {
		enabled: false
	}
};

describe('Prebid bidder', () => {
	it('can be initialized', () => {
		let prebid = new Prebid(bidderConfig);
	});
});
