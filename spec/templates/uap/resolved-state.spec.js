import sinon from 'sinon';
import {expect} from 'chai';
import ResolvedState from '../../../src/modules/templates/uap/resolved-state';
import ResolvedStateSwitch from '../../../src/modules/templates/uap/resolved-state-switch';
import QueryString from 'ad-engine/src/utils/query-string';

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

describe('ResolvedState', () => {
	blockingUrlParams.forEach(param => {
		it(`Should not be in resolved state when is not blocked by query param ${param}`, () => {
			sinon.stub(QueryString, 'get');
			QueryString.get.returns(param);

			expect(ResolvedState.isResolvedState(createCorrectParams())).to.equal(false);
			QueryString.get.restore();
		});
	});

	forcingUrlParams.forEach(param => {
		it(`Should be in resolved state when is forced by query param ${param}`, () => {
			sinon.stub(QueryString, 'get');
			QueryString.get.returns(param);

			expect(ResolvedState.isResolvedState(createCorrectParams())).to.equal(true);
			QueryString.get.restore();
		});
	});

	it('Should not be in resolved state when no information about seen ad was stored', () => {
		sinon.stub(ResolvedStateSwitch, 'wasDefaultStateSeen');
		ResolvedStateSwitch.wasDefaultStateSeen.returns(false);

		expect(ResolvedState.isResolvedState(createCorrectParams())).to.equal(false);
		ResolvedStateSwitch.wasDefaultStateSeen.restore();
	});

	it('Should be in resolved state when information about seen ad was stored', () => {
		sinon.stub(ResolvedStateSwitch, 'wasDefaultStateSeen');
		ResolvedStateSwitch.wasDefaultStateSeen.returns(true);

		expect(ResolvedState.isResolvedState(createCorrectParams())).to.equal(true);
		ResolvedStateSwitch.wasDefaultStateSeen.restore();
	});

	it('Should not modify params if template does not support resolved state', () => {
		const params = createIncorrectParams();

		sinon.stub(stubs.videoSettings, 'getParams');
		stubs.videoSettings.getParams.returns(params);

		ResolvedState.setImage(stubs.videoSettings);

		expect(params.aspectRatio).to.equal(ASPECT_RATIO);
		expect(params.image1.element.src).to.equal(DEFAULT_IMAGE);

		stubs.videoSettings.getParams.restore();
	});

	it('Should use default state resources when no information about seen ad was stored for add with one image', () => {
		const params = createCorrectParams();

		sinon.stub(stubs.videoSettings, 'isResolvedState');
		sinon.stub(stubs.videoSettings, 'getParams');

		stubs.videoSettings.getParams.returns(params);
		stubs.videoSettings.isResolvedState.returns(false);

		ResolvedState.setImage(stubs.videoSettings);

		expect(params.aspectRatio).to.equal(ASPECT_RATIO);
		expect(params.image1.element.src).to.equal(BIG_IMAGE);

		stubs.videoSettings.getParams.restore();
		stubs.videoSettings.isResolvedState.restore();
	});

	it('Should use resolved state resources when information about seen ad was stored for add with one image', () => {
		const params = createCorrectParams();

		sinon.stub(stubs.videoSettings, 'isResolvedState');
		sinon.stub(stubs.videoSettings, 'getParams');

		stubs.videoSettings.getParams.returns(params);
		stubs.videoSettings.isResolvedState.returns(true);

		ResolvedState.setImage(stubs.videoSettings);

		expect(params.aspectRatio).to.equal(RESOLVED_STATE_ASPECT_RATIO);
		expect(params.image1.element.src).to.equal(RESOLVED_IMAGE);

		stubs.videoSettings.getParams.restore();
		stubs.videoSettings.isResolvedState.restore();
	});

	it('should use default state resources when no information about seen ad was stored using split template', () => {
		const params = createCorrectParamsWithTwoAssets();

		sinon.stub(stubs.videoSettings, 'isResolvedState');
		sinon.stub(stubs.videoSettings, 'getParams');

		stubs.videoSettings.getParams.returns(params);
		stubs.videoSettings.isResolvedState.returns(false);

		ResolvedState.setImage(stubs.videoSettings);

		expect(params.aspectRatio).to.equal(ASPECT_RATIO);
		expect(params.image1.element.src).to.equal(BIG_IMAGE);
		expect(params.image2.element.src).to.equal(BIG_IMAGE_2);

		stubs.videoSettings.getParams.restore();
		stubs.videoSettings.isResolvedState.restore();
	});

	it('should use resolved state resources when information about seen ad was stored using split template', () => {
		const params = createCorrectParamsWithTwoAssets();

		sinon.stub(stubs.videoSettings, 'isResolvedState');
		sinon.stub(stubs.videoSettings, 'getParams');

		stubs.videoSettings.getParams.returns(params);
		stubs.videoSettings.isResolvedState.returns(true);

		ResolvedState.setImage(stubs.videoSettings);

		expect(params.aspectRatio).to.equal(RESOLVED_STATE_ASPECT_RATIO);
		expect(params.image1.element.src).to.equal(RESOLVED_IMAGE);
		expect(params.image2.element.src).to.equal(RESOLVED_IMAGE_2);

		stubs.videoSettings.getParams.restore();
		stubs.videoSettings.isResolvedState.restore();
	});

	it('should support hivi template in resolved state', () => {
		sinon.stub(ResolvedStateSwitch, 'wasDefaultStateSeen');
		ResolvedStateSwitch.wasDefaultStateSeen.returns(true);

		const params = {
			theme: 'hivi'
		};

		expect(ResolvedState.isResolvedState(params)).to.equal(true);
		ResolvedStateSwitch.wasDefaultStateSeen.restore();
	});

	it('should not support non existing template in resolved state', () => {
		sinon.stub(ResolvedStateSwitch, 'wasDefaultStateSeen');
		ResolvedStateSwitch.wasDefaultStateSeen.returns(true);

		const params = {
			theme: 'non-existing-template'
		};

		expect(ResolvedState.isResolvedState(params)).to.equal(false);
		ResolvedStateSwitch.wasDefaultStateSeen.restore();
	});
});
