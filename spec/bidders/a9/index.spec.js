import { expect } from 'chai';
import { A9 } from '../../../src/bidders/a9/index'

const bidderConfig = {
	slots: {},
	slotsVideo: []
};

describe('A9 bidder', () => {
	it('can be initialized', () => {
		const a9 = new A9(bidderConfig);
	});
});
