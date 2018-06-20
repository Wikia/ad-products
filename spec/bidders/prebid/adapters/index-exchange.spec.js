import { expect } from 'chai';
import { IndexExchange }  from '../../../../src/bidders/prebid/adapters/index-exchange'

describe('IndexExchange bidder adapter', () => {
	it('can be enabled', () => {
		let indexExchange = new IndexExchange({
			enabled: true
		});

		expect(indexExchange.enabled).to.equal(true);
	});

	it('prepareAdUnits returns data in correct shape', () => {
		let indexExchange = new IndexExchange({
			enabled: true,
			slots: {
				bottom_leaderboard: {
					sizes: [
						[300, 250],
						[320, 50]
					],
					siteId: '185056'
				}
			}
		});

		expect(indexExchange.prepareAdUnits()).to.deep.equal([
			{
				code: 'bottom_leaderboard',
				mediaTypes: {
					banner: {
						sizes: [
							[300, 250],
							[320, 50]
						]
					}
				},
				bids: [
					{
						bidder: 'indexExchange',
						params: {
							siteId: '185056',
							size: [300, 250]
						}
					},
					{
						bidder: 'indexExchange',
						params: {
							siteId: '185056',
							size: [320, 50]
						}
					}
				]
			}
		]);
	});
});
