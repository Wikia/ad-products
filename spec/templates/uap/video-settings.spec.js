import sinon from 'sinon';
import VideoSettings from '../../../src/modules/templates/uap/video-settings';
import ResolvedState from '../../../src/modules/templates/uap/resolved-state';

QUnit.test('Should be not auto play without autoplay parameter', (assert) => {
	const videoSettings = new VideoSettings({});
	assert.equal(videoSettings.isAutoPlay(), false);
});

QUnit.test('Should be auto play for default state with parameter', (assert) => {
	const videoSettings = new VideoSettings({
		autoPlay: true
	});
	assert.equal(videoSettings.isAutoPlay(), true);
});

QUnit.test('Should not be auto play for default state with incorrect parameter', (assert) => {
	const videoSettings = new VideoSettings({
		autoPlay: false
	});
	assert.equal(videoSettings.isAutoPlay(), false);
});

QUnit.test('Should be auto play for resolved state with autoplay parameter', (assert) => {
	sinon.stub(ResolvedState, 'isResolvedState');
	ResolvedState.isResolvedState.returns(true);

	const videoSettings = new VideoSettings({
		autoPlay: false,
		resolvedStateAutoPlay: true
	});

	assert.equal(videoSettings.isAutoPlay(), true);
	ResolvedState.isResolvedState.restore();
});

QUnit.test('Should not be auto play for resolved state without autoplay parameter', (assert) => {
	sinon.stub(ResolvedState, 'isResolvedState');
	ResolvedState.isResolvedState.returns(true);

	const videoSettings = new VideoSettings({
		autoPlay: false,
		resolvedAutoPlay: false
	});

	assert.equal(videoSettings.isAutoPlay(), false);
	ResolvedState.isResolvedState.restore();
});

QUnit.test('Should be split layout for correct parameter', (assert) => {
	const videoSettings = new VideoSettings({
		splitLayoutVideoPosition: 'right'
	});

	assert.equal(videoSettings.isSplitLayout(), true);
});

QUnit.test('Should be split layout for incorrect parameter', (assert) => {
	const videoSettings = new VideoSettings({
		splitLayoutVideoPosition: ''
	});

	assert.equal(videoSettings.isSplitLayout(), false);
});
