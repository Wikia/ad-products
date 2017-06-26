import sinon from 'sinon';
import ResolvedState from '../../../src/modules/templates/uap/resolved-state';
import ResolvedStateSwitch from '../../../src/modules/templates/uap/resolved-state-switch';
import QueryString from 'ad-engine/utils/query-string';

const ASPECT_RATIO = 1,
	BIG_IMAGE = 'bigImage.png',
	BIG_IMAGE_2 = 'bigImage2.png',
	DEFAULT_IMAGE = 'oldImage.png',
	RESOLVED_STATE_ASPECT_RATIO = 2,
	RESOLVED_IMAGE = 'resolvedImage.png',
	RESOLVED_IMAGE_2 = 'resolvedImage2.png',
	stubs = {
		videoSettings: {
			getParams() {
				return {};
			},
			isResolvedState() {
				return false;
			}
		}
	},
	blockingUrlParams = [
		false,
		'blocked',
		'false',
		'0'
	],
	forcingUrlParams = [
		true,
		'true',
		'1'
	];

function createCorrectParams() {
	return {
		aspectRatio: ASPECT_RATIO,
		resolvedStateAspectRatio: RESOLVED_STATE_ASPECT_RATIO,
		image1: {
			element: {
				src: DEFAULT_IMAGE
			},
			defaultStateSrc: BIG_IMAGE,
			resolvedStateSrc: RESOLVED_IMAGE
		}
	};
}

function createIncorrectParams() {
	return {
		aspectRatio: ASPECT_RATIO,
		resolvedStateAspectRatio: 0,
		image1: {
			element: {
				src: DEFAULT_IMAGE
			},
			defaultStateSrc: BIG_IMAGE,
			resolvedStateSrc: ''
		}
	};
}

function createCorrectParamsWithTwoAssets() {
	return {
		aspectRatio: ASPECT_RATIO,
		resolvedStateAspectRatio: RESOLVED_STATE_ASPECT_RATIO,
		image1: {
			element: {
				src: DEFAULT_IMAGE
			},
			defaultStateSrc: BIG_IMAGE,
			resolvedStateSrc: RESOLVED_IMAGE
		},
		image2: {
			element: {
				src: DEFAULT_IMAGE
			},
			defaultStateSrc: BIG_IMAGE_2,
			resolvedStateSrc: RESOLVED_IMAGE_2
		}
	};
}

blockingUrlParams.forEach(param => {
	QUnit.test(`Should not be in resolved state when is not blocked by query param ${param}`, (assert) => {
		sinon.stub(QueryString, 'get');
		QueryString.get.returns(param);

		assert.equal(false, ResolvedState.isResolvedState(createCorrectParams()));
		QueryString.get.restore();
	});
});

forcingUrlParams.forEach(param => {
	QUnit.test(`Should be in resolved state when is forced by query param ${param}`, (assert) => {
		sinon.stub(QueryString, 'get');
		QueryString.get.returns(param);

		assert.equal(true, ResolvedState.isResolvedState(createCorrectParams()));
		QueryString.get.restore();
	});
});

QUnit.test('Should not be in resolved state when no information about seen ad was stored', (assert) => {
	sinon.stub(ResolvedStateSwitch, 'wasDefaultStateSeen');
	ResolvedStateSwitch.wasDefaultStateSeen.returns(false);

	assert.equal(false, ResolvedState.isResolvedState(createCorrectParams()));
	ResolvedStateSwitch.wasDefaultStateSeen.restore();
});

QUnit.test('Should be in resolved state when information about seen ad was stored', (assert) => {
	sinon.stub(ResolvedStateSwitch, 'wasDefaultStateSeen');
	ResolvedStateSwitch.wasDefaultStateSeen.returns(true);

	assert.equal(true, ResolvedState.isResolvedState(createCorrectParams()));
	ResolvedStateSwitch.wasDefaultStateSeen.restore();
});


QUnit.test('Should not modify params if template does not support resolved state', (assert) => {
	const params = createIncorrectParams();

	sinon.stub(stubs.videoSettings, 'getParams');
	stubs.videoSettings.getParams.returns(params);

	ResolvedState.setImage(stubs.videoSettings);

	assert.equal(params.aspectRatio, ASPECT_RATIO);
	assert.equal(params.image1.element.src, DEFAULT_IMAGE);

	stubs.videoSettings.getParams.restore();
});

QUnit.test('Should use default state resources when no information about seen ad was stored for add with one image', (assert) => {
	const params = createCorrectParams();

	sinon.stub(stubs.videoSettings, 'isResolvedState');
	sinon.stub(stubs.videoSettings, 'getParams');

	stubs.videoSettings.getParams.returns(params);
	stubs.videoSettings.isResolvedState.returns(false);

	ResolvedState.setImage(stubs.videoSettings);

	assert.equal(params.aspectRatio, ASPECT_RATIO);
	assert.equal(params.image1.element.src, BIG_IMAGE);

	stubs.videoSettings.getParams.restore();
	stubs.videoSettings.isResolvedState.restore();
});

QUnit.test('Should use resolved state resources when information about seen ad was stored for add with one image', (assert) => {
	const params = createCorrectParams();

	sinon.stub(stubs.videoSettings, 'isResolvedState');
	sinon.stub(stubs.videoSettings, 'getParams');

	stubs.videoSettings.getParams.returns(params);
	stubs.videoSettings.isResolvedState.returns(true);

	ResolvedState.setImage(stubs.videoSettings);

	assert.equal(params.aspectRatio, RESOLVED_STATE_ASPECT_RATIO);
	assert.equal(params.image1.element.src, RESOLVED_IMAGE);

	stubs.videoSettings.getParams.restore();
	stubs.videoSettings.isResolvedState.restore();
});

QUnit.test('should use default state resources when no information about seen ad was stored using split template', (assert) => {
	const params = createCorrectParamsWithTwoAssets();

	sinon.stub(stubs.videoSettings, 'isResolvedState');
	sinon.stub(stubs.videoSettings, 'getParams');

	stubs.videoSettings.getParams.returns(params);
	stubs.videoSettings.isResolvedState.returns(false);

	ResolvedState.setImage(stubs.videoSettings);

	assert.equal(params.aspectRatio, ASPECT_RATIO);
	assert.equal(params.image1.element.src, BIG_IMAGE);
	assert.equal(params.image2.element.src, BIG_IMAGE_2);

	stubs.videoSettings.getParams.restore();
	stubs.videoSettings.isResolvedState.restore();
});

QUnit.test('should use resolved state resources when information about seen ad was stored using split template', (assert) => {
	const params = createCorrectParamsWithTwoAssets();

	sinon.stub(stubs.videoSettings, 'isResolvedState');
	sinon.stub(stubs.videoSettings, 'getParams');

	stubs.videoSettings.getParams.returns(params);
	stubs.videoSettings.isResolvedState.returns(true);

	ResolvedState.setImage(stubs.videoSettings);

	assert.equal(params.aspectRatio, RESOLVED_STATE_ASPECT_RATIO);
	assert.equal(params.image1.element.src, RESOLVED_IMAGE);
	assert.equal(params.image2.element.src, RESOLVED_IMAGE_2);

	stubs.videoSettings.getParams.restore();
	stubs.videoSettings.isResolvedState.restore();
});
