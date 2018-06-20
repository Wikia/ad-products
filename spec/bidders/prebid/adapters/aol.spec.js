import { expect } from 'chai';
import { Aol }  from '../../../../src/bidders/prebid/adapters/aol'

describe('Aol bidder adapter', () => {
	it('can be enabled', () => {
		let aol = new Aol({
			enabled: true
		});

		expect(aol.enabled).to.equal(true);
	});

	it('prepareAdUnits returns data in correct shape', () => {
		let aol = new Aol({
			enabled: true,
			slots: {
				mobile_top_leaderboard: {
					sizes: [
						[320, 50]
					],
					placement: '4436772',
					alias: '4436772',
					sizeId: '3055'
				}
			}
		});

		expect(aol.prepareAdUnits()).to.deep.equal([
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
						bidder: 'aol',
						params: {
							placement: '4436772',
							network: '9435.1',
							alias: '4436772',
							sizeId: '3055'
						}
					}
				]
			}
		]);
	});
});
