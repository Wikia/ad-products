import {assert} from 'chai';
import sinon from 'sinon';
import {context, slotService, trackingOptOut} from '@wikia/ad-engine';
import {setupNpaContext} from '../../src/utils/npa';

describe('NPA - setup context ', () => {
	let sandbox;

	beforeEach(() => {
		sandbox = sinon.sandbox.create();
		sandbox.stub(trackingOptOut, 'isOptedOut')
	});

	afterEach(function () {
		sandbox.restore();
	});

	it('sets npa targeting for not defined tracking opt-out', () => {
		trackingOptOut.isOptedOut.returns(undefined);
		setupNpaContext();
		assert.equal(context.get('targeting.npa'), '0');
	});

	it('sets npa targeting for turned off tracking opt-out', () => {
		trackingOptOut.isOptedOut.returns(false);
		setupNpaContext();
		assert.equal(context.get('targeting.npa'), '0');
	});

	it('sets npa targeting for tracking opt-out', () => {
		trackingOptOut.isOptedOut.returns(true);
		setupNpaContext();
		assert.equal(context.get('targeting.npa'), '1');
	});
});
