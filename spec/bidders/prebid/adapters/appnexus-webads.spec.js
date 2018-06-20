import { expect } from 'chai';
import { AppnexusWebads }  from '../../../../src/bidders/prebid/adapters/appnexus-webads'

describe('AppnexusWebAds bidder adapter', () => {
	it('can be enabled', () => {
		let appnexusWebads = new AppnexusWebads({
			enabled: true
		});

		expect(appnexusWebads.enabled).to.equal(true);
	});

	it('prepareAdUnits returns data in correct shape', () => {
		let appnexusWebads = new AppnexusWebads({
			enabled: true,
			slots: {
				bottom_leaderboard: {
					placementId: '13104398',
					sizes: [
						[300, 250],
						[320, 100],
						[320, 50]
					]
				}
			}
		});

		expect(appnexusWebads.prepareAdUnits()).to.deep.equal([
			{
				code: 'bottom_leaderboard',
				mediaTypes: {
					banner: {
						sizes: [
							[300, 250],
							[320, 100],
							[320, 50]
						]
					}
				},
				bids: [
					{
						bidder: 'appnexusWebAds',
						params: {
							placementId: '13104398'
						}
					}
				]
			}
		]);
	});
});
