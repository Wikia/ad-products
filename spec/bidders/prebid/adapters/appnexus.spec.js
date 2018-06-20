import { expect } from 'chai';
import { Appnexus }  from '../../../../src/bidders/prebid/adapters/appnexus'

describe('Appnexus bidder adapter', () => {
	it('can be enabled', () => {
		let appnexus = new Appnexus({
			enabled: true
		});

		expect(appnexus.enabled).to.equal(true);
	});

	it('prepareAdUnits returns data in correct shape', () => {
		let appnexus = new Appnexus({
			enabled: true,
			slots: {
				bottom_leaderboard: {
					sizes: [
						[300, 250],
						[320, 50]
					]
				}
			},
			placements: {
				ent: '9412992',
				gaming: '9412993',
				life: '9412994',
				other: '9412994'
			}
		});

		expect(appnexus.prepareAdUnits()).to.deep.equal([
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
						bidder: 'appnexus',
						params: {
							placementId: '9412994'
						}
					}
				]
			}
		]);
	})
});
