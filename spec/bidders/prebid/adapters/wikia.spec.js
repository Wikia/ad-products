import { expect } from 'chai';
import { Wikia }  from '../../../../src/bidders/prebid/adapters/wikia'

describe('Wikia bidder adapter', () => {
	it('can be enabled', () => {
		let wikia = new Wikia({
			enabled: true
		});

		expect(wikia.enabled).to.equal(false);
	});

	it('prepareAdUnits returns data in correct shape', () => {
		let wikia = new Wikia({
			enabled: true,
			slots: {
				mobile_top_leaderboard: {
					sizes: [
						[320, 50]
					]
				}
			}
		});

		expect(wikia.prepareAdUnits()).to.deep.equal([
			{
				code: 'mobile_top_leaderboard',
				mediaTypes: {
					banner: {
						sizes: [
							[320, 50]
						]
					}
				},
				bids: [
					{
						bidder: 'wikia'
					}
				]
			}
		]);
	})
});
