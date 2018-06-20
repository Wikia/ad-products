import { expect } from 'chai';
import { Beachfront }  from '../../../../src/bidders/prebid/adapters/beachfront'

describe('Beachfront bidder adapter', () => {
	it('can be enabled', () => {
		let beachfront = new Beachfront({
			enabled: true
		});

		expect(beachfront.enabled).to.equal(true);
	});

	it('prepareAdUnits returns data in correct shape', () => {
		let beachfront = new Beachfront({
			enabled: true,
			slots: {
				mobile_in_content: {
					appId: 'f377a8b1-c5c0-4108-f932-0102a81ff43d'
				}
			}
		});

		expect(beachfront.prepareAdUnits()).to.deep.equal([
			{
				code: 'mobile_in_content',
				mediaTypes: {
					video: {
						playerSize: [640, 480]
					}
				},
				bids: [
					{
						bidder: 'beachfront',
						params: {
							bidfloor: 0.01,
							appId: 'f377a8b1-c5c0-4108-f932-0102a81ff43d'
						}
					}
				]
			}
		]);
	})
});
