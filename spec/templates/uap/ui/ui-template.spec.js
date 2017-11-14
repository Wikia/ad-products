import {expect} from 'chai';
import sinon from 'sinon';
import VideoSettings from '../../../../src/modules/templates/uap/video-settings';
import UITemplate from '../../../../src/modules/templates/uap/ui/ui-template';

const UI = {
	CLOSE_BUTTON: 'closeButton',
	REPLAY_OVERLAY: 'replayOverlay'
};

describe('UITemplate', () => {
	it('Should show close button element if there is no autoplay and there is no split screen', () => {
		const videoSettings = new VideoSettings({autoPlay: true});

		sinon.stub(videoSettings, 'isAutoPlay');
		videoSettings.isAutoPlay.returns(false);

		sinon.stub(videoSettings, 'isSplitLayout');
		videoSettings.isSplitLayout.returns(false);

		expect(UITemplate.selectTemplate(videoSettings).includes(UI.CLOSE_BUTTON)).to.equal(true);
		expect(UITemplate.selectTemplate(videoSettings).includes(UI.REPLAY_OVERLAY)).to.equal(false);
	});

	it('Should hide close button element if there is autoplay for not split ad', () => {
		const videoSettings = new VideoSettings({});

		sinon.stub(videoSettings, 'isAutoPlay');
		videoSettings.isAutoPlay.returns(true);

		sinon.stub(videoSettings, 'isSplitLayout');
		videoSettings.isSplitLayout.returns(false);

		expect(UITemplate.selectTemplate(videoSettings).includes(UI.CLOSE_BUTTON)).to.equal(false);
		expect(UITemplate.selectTemplate(videoSettings).includes(UI.REPLAY_OVERLAY)).to.equal(false);
	});

	it('Should hide close button element if there is auto play for split ad', () => {
		const videoSettings = new VideoSettings({});

		sinon.stub(videoSettings, 'isAutoPlay');
		videoSettings.isAutoPlay.returns(true);

		sinon.stub(videoSettings, 'isSplitLayout');
		videoSettings.isSplitLayout.returns(true);

		expect(UITemplate.selectTemplate(videoSettings).includes(UI.CLOSE_BUTTON)).to.equal(false);
		expect(UITemplate.selectTemplate(videoSettings).includes(UI.REPLAY_OVERLAY)).to.equal(true);
	});

	it('Should show replay button and close for click to play and split', () => {
		const videoSettings = new VideoSettings({});

		sinon.stub(videoSettings, 'isAutoPlay');
		videoSettings.isAutoPlay.returns(false);

		sinon.stub(videoSettings, 'isSplitLayout');
		videoSettings.isSplitLayout.returns(true);

		expect(UITemplate.selectTemplate(videoSettings).includes(UI.CLOSE_BUTTON)).to.equal(true);
		expect(UITemplate.selectTemplate(videoSettings).includes(UI.REPLAY_OVERLAY)).to.equal(true);
	});
});
