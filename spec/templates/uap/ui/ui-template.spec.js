import {expect} from 'chai';
import sinon from 'sinon';
import VideoSettings from '../../../../src/modules/templates/uap/video-settings';
import {selectTemplate} from '../../../../src/modules/templates/uap/ui/ui-template';
import CloseButton from '../../../../src/modules/templates/uap/ui/close-button';
import ReplayOverlay from '../../../../src/modules/templates/uap/ui/replay-overlay';
import ToggleFullscreen from '../../../../src/modules/templates/uap/ui/toggle-fullscreen';

describe('UITemplate', () => {
	it('Should show close button element if there is no autoplay and there is no split screen', () => {
		const videoSettings = new VideoSettings({autoPlay: true});

		sinon.stub(videoSettings, 'isAutoPlay');
		videoSettings.isAutoPlay.returns(false);

		sinon.stub(videoSettings, 'isSplitLayout');
		videoSettings.isSplitLayout.returns(false);

		expect(selectTemplate(videoSettings).includes(CloseButton)).to.equal(true);
		expect(selectTemplate(videoSettings).includes(ReplayOverlay)).to.equal(false);
	});

	it('Should hide close button element if there is autoplay for not split ad', () => {
		const videoSettings = new VideoSettings({});

		sinon.stub(videoSettings, 'isAutoPlay');
		videoSettings.isAutoPlay.returns(true);

		sinon.stub(videoSettings, 'isSplitLayout');
		videoSettings.isSplitLayout.returns(false);

		expect(selectTemplate(videoSettings).includes(CloseButton)).to.equal(false);
		expect(selectTemplate(videoSettings).includes(ReplayOverlay)).to.equal(false);
	});

	it('Should hide close button element if there is auto play for split ad', () => {
		const videoSettings = new VideoSettings({});

		sinon.stub(videoSettings, 'isAutoPlay');
		videoSettings.isAutoPlay.returns(true);

		sinon.stub(videoSettings, 'isSplitLayout');
		videoSettings.isSplitLayout.returns(true);

		expect(selectTemplate(videoSettings).includes(CloseButton)).to.equal(false);
		expect(selectTemplate(videoSettings).includes(ReplayOverlay)).to.equal(true);
	});

	it('Should show replay button and close for click to play and split', () => {
		const videoSettings = new VideoSettings({});

		sinon.stub(videoSettings, 'isAutoPlay');
		videoSettings.isAutoPlay.returns(false);

		sinon.stub(videoSettings, 'isSplitLayout');
		videoSettings.isSplitLayout.returns(true);

		expect(selectTemplate(videoSettings).includes(CloseButton)).to.equal(true);
		expect(selectTemplate(videoSettings).includes(ReplayOverlay)).to.equal(true);
	});
});
