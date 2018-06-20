import { expect } from 'chai';
import { Prebid } from '../../../src/bidders/prebid/index'

const bidderConfig = {
	lazyLoadingEnabled: false
};

describe('Prebid bidder', () => {
	it('can be enabled', () => {
		let prebid = new Prebid(bidderConfig);
	});
});
