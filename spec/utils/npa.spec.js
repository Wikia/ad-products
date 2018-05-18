import {assert} from 'chai';
import sinon from 'sinon';
import {context, slotService, trackingOptIn} from '@wikia/ad-engine';
import {setupNpaContext} from '../../src/utils/npa';

describe('NPA - setup context ', () => {
	let sandbox;

	beforeEach(() => {
		sandbox = sinon.sandbox.create();
		sandbox.stub(trackingOptIn, 'isOptedIn')
	});

	afterEach(function () {
		sandbox.restore();
	});

	it('sets npa targeting for turned off tracking opt-in', () => {
		trackingOptIn.isOptedIn.returns(false);
		setupNpaContext();
		assert.equal(context.get('targeting.npa'), '1');
	});

	it('sets npa targeting for tracking opt-in', () => {
		trackingOptIn.isOptedIn.returns(true);
		setupNpaContext();
		assert.equal(context.get('targeting.npa'), '0');
	});
});
