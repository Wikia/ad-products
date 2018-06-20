import { expect } from 'chai';
import { Openx }  from '../../../../src/bidders/prebid/adapters/openx'

describe('Openx bidder adapter', () => {
	it('can be enabled', () => {
		let openx = new Openx({
			enabled: true
		});

		expect(openx.enabled).to.equal(true);
	});

	it('prepareAdUnits returns data in correct shape', () => {
		let openx = new Openx({
			enabled: true,
			slots: {
				mobile_in_content: {
					sizes: [
						[300, 250],
						[320, 480]
					],
					unit: 538735699
				}
			}
		});

		expect(openx.prepareAdUnits()).to.deep.equal([
			{
				code: 'mobile_in_content',
				mediaTypes: {
					banner: {
						sizes: [
							[300, 250],
							[320, 480]
						]
					}
				},
				bids: [
					{
						bidder: 'openx',
						params: {
							unit: 538735699,
							delDomain: 'wikia-d.openx.net'
						}
					}
				]
			}
		]);
	});
});
