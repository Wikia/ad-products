import sinon from 'sinon';
import VideoSettings from '../../../../src/modules/templates/uap/video-settings';
import UITemplate from '../../../../src/modules/templates/uap/ui/ui-template';

const UI = {
	CLOSE_BUTTON: 'closeButton',
	REPLAY_OVERLAY: 'replayOverlay'
};

function contains(arr, element) {
	return arr.indexOf(element) !== -1;
}

function notContain(arr, element) {
	return arr.indexOf(element) === -1;
}

QUnit.test('Should show close button element if there is no autoplay and there is no split screen', (assert) => {
	const videoSettings = new VideoSettings({ autoPlay: true });

	sinon.stub(videoSettings, 'isAutoPlay');
	videoSettings.isAutoPlay.returns(false);

	sinon.stub(videoSettings, 'isSplitLayout');
	videoSettings.isSplitLayout.returns(false);

	assert.ok(contains(UITemplate.selectTemplate(videoSettings), UI.CLOSE_BUTTON));
	assert.ok(notContain(UITemplate.selectTemplate(videoSettings), UI.REPLAY_OVERLAY));
});

QUnit.test('Should hide close button element if there is autoplay for not split ad', (assert) => {
	const videoSettings = new VideoSettings({});


	sinon.stub(videoSettings, 'isAutoPlay');
	videoSettings.isAutoPlay.returns(true);

	sinon.stub(videoSettings, 'isSplitLayout');
	videoSettings.isSplitLayout.returns(false);


	assert.ok(notContain(UITemplate.selectTemplate(videoSettings), UI.CLOSE_BUTTON));
	assert.ok(notContain(UITemplate.selectTemplate(videoSettings), UI.REPLAY_OVERLAY));
});

QUnit.test('Should hide close button element if there is auto play for split ad', (assert) => {
	const videoSettings = new VideoSettings({});

	sinon.stub(videoSettings, 'isAutoPlay');
	videoSettings.isAutoPlay.returns(true);

	sinon.stub(videoSettings, 'isSplitLayout');
	videoSettings.isSplitLayout.returns(true);

	assert.ok(notContain(UITemplate.selectTemplate(videoSettings), UI.CLOSE_BUTTON));
	assert.ok(contains(UITemplate.selectTemplate(videoSettings), UI.REPLAY_OVERLAY));
});

QUnit.test('Should show replay button and close for click to play and split', (assert) => {
	const videoSettings = new VideoSettings({});

	sinon.stub(videoSettings, 'isAutoPlay');
	videoSettings.isAutoPlay.returns(false);

	sinon.stub(videoSettings, 'isSplitLayout');
	videoSettings.isSplitLayout.returns(true);

	assert.ok(contains(UITemplate.selectTemplate(videoSettings), UI.CLOSE_BUTTON));
	assert.ok(contains(UITemplate.selectTemplate(videoSettings), UI.REPLAY_OVERLAY));
});
