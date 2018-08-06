import {expect} from 'chai';
import sinon from 'sinon';
import { VideoSettings } from '../../../../src/templates/uap/video-settings';
import { selectTemplate } from '../../../../src/templates/interface/video/ui-template';
import CloseButton from '../../../../src/templates/interface/video/close-button';
import ReplayOverlay from '../../../../src/templates/interface/video/replay-overlay';
import ToggleFullscreen from '../../../../src/templates/interface/video/toggle-fullscreen';

function getContainer() {
	return document.createElement('div');
}

describe('UITemplate', () => {
	it('Should show close button element if there is no autoplay and there is no split screen', () => {
		const videoSettings = new VideoSettings({autoPlay: true, container: getContainer()});

		sinon.stub(videoSettings, 'isAutoPlay');
		videoSettings.isAutoPlay.returns(false);

		sinon.stub(videoSettings, 'isSplitLayout');
		videoSettings.isSplitLayout.returns(false);

		expect(selectTemplate(videoSettings).includes(CloseButton)).to.equal(true);
		expect(selectTemplate(videoSettings).includes(ReplayOverlay)).to.equal(false);
	});

	it('Should hide close button element if there is autoplay for not split ad', () => {
		const videoSettings = new VideoSettings({container: getContainer()});

		sinon.stub(videoSettings, 'isAutoPlay');
		videoSettings.isAutoPlay.returns(true);

		sinon.stub(videoSettings, 'isSplitLayout');
		videoSettings.isSplitLayout.returns(false);

		expect(selectTemplate(videoSettings).includes(CloseButton)).to.equal(false);
		expect(selectTemplate(videoSettings).includes(ReplayOverlay)).to.equal(false);
	});

	it('Should hide close button element if there is auto play for split ad', () => {
		const videoSettings = new VideoSettings({container: getContainer()});

		sinon.stub(videoSettings, 'isAutoPlay');
		videoSettings.isAutoPlay.returns(true);

		sinon.stub(videoSettings, 'isSplitLayout');
		videoSettings.isSplitLayout.returns(true);

		expect(selectTemplate(videoSettings).includes(CloseButton)).to.equal(false);
		expect(selectTemplate(videoSettings).includes(ReplayOverlay)).to.equal(true);
	});

	it('Should show replay button and close for click to play and split', () => {
		const videoSettings = new VideoSettings({container: getContainer()});

		sinon.stub(videoSettings, 'isAutoPlay');
		videoSettings.isAutoPlay.returns(false);

		sinon.stub(videoSettings, 'isSplitLayout');
		videoSettings.isSplitLayout.returns(true);

		expect(selectTemplate(videoSettings).includes(CloseButton)).to.equal(true);
		expect(selectTemplate(videoSettings).includes(ReplayOverlay)).to.equal(true);
	});
});
