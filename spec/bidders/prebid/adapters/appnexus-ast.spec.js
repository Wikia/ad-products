import { expect } from 'chai';
import { AppnexusAst }  from '../../../../src/bidders/prebid/adapters/appnexus-ast'

describe('AppnexusAst bidder adapter', () => {
	it('can be enabled', () => {
		let appnexusAst = new AppnexusAst({
			enabled: true
		});

		expect(appnexusAst.enabled).to.equal(true);
	});

	it('prepareAdUnits returns data in correct shape', () => {
		let appnexusAst = new AppnexusAst({
			enabled: true,
			slots: {
				mobile_in_content: {
					placementId: '11543173'
				}
			}
		});

		expect(appnexusAst.prepareAdUnits()).to.deep.equal([
			{
				code: 'mobile_in_content',
				mediaTypes: {
					video: {
						context: 'outstream',
						playerSize: [640, 480]
					}
				},
				bids: [
					{
						bidder: 'appnexusAst',
						params: {
							placementId: '11543173',
							video: {
								skippable: false,
								playback_method: ['auto_play_sound_off']
							}
						}
					}
				]
			}
		]);
	});
});
