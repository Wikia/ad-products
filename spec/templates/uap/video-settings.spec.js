import { expect } from 'chai';
import { VideoSettings } from '../../../src/templates/uap/video-settings';

describe('VideoSettings', () => {
	it('returns correct autoplay value', () => {
		let settings = new VideoSettings({autoPlay: true});
		expect(settings.isAutoPlay()).to.equal(true);
	});
});
