import { expect } from 'chai';
import { Pubmatic }  from '../../../../src/bidders/prebid/adapters/pubmatic'

describe('Pubmatic bidder adapter', () => {
	it('can be enabled', () => {
		let pubmatic = new Pubmatic({
			enabled: true
		});

		expect(pubmatic.enabled).to.equal(true);
	});

	it('prepareAdUnits returns data in correct shape', () => {
		let pubmatic = new Pubmatic({
			enabled: true,
			publisherId: '112233',
			slots: {
				mobile_in_content: {
					sizes: [
						[300, 250],
						[320, 480]
					],
					ids: [
						'/1234/MOBILE_IN_CONTENT_300x250@300x250',
						'/1234/MOBILE_IN_CONTENT_320x480@320x480'
					]
				}
			}
		});

		expect(pubmatic.prepareAdUnits()).to.deep.equal([
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
						bidder: 'pubmatic',
						params: {
							adSlot: '/1234/MOBILE_IN_CONTENT_300x250@300x250',
							publisherId: '112233'
						}
					},
					{
						bidder: 'pubmatic',
						params: {
							adSlot: '/1234/MOBILE_IN_CONTENT_320x480@320x480',
							publisherId: '112233'
						}
					}
				]
			}
		]);
	});
});
