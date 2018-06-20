import { expect } from 'chai';
import { Onemobile }  from '../../../../src/bidders/prebid/adapters/onemobile'

describe('Onemobile bidder adapter', () => {
	it('can be enabled', () => {
		let onemobile = new Onemobile({
			enabled: true
		});

		expect(onemobile.enabled).to.equal(true);
	});

	it('prepareAdUnits returns data in correct shape', () => {
		let onemobile = new Onemobile({
			enabled: true,
			slots: {
				mobile_in_content: {
					size: [300, 250],
					pos: 'wikia_mw_incontent_hb'
				}
			}
		});

		expect(onemobile.prepareAdUnits()).to.deep.equal([
			{
				code: 'mobile_in_content',
				mediaTypes: {
					banner: {
						sizes: [
							[300, 250]
						]
					}
				},
				bids: [
					{
						bidder: 'onemobile',
						params: {
							dcn: '2c9d2b50015e5e9a6540a64f3eac0266',
							pos: 'wikia_mw_incontent_hb'
						}
					}
				]
			}
		]);
	})
});
