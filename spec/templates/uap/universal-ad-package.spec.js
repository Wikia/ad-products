import sinon from 'sinon';
import {expect} from 'chai';
import {context} from '@wikia/ad-engine';
import {universalAdPackage} from '../../../src/templates/uap/universal-ad-package';

describe('UniversalAdPackage', () => {
	const UAP_ID = 666;
	let sandbox;

	beforeEach(function () {
		sandbox = sinon.sandbox.create();
		sandbox.stub(context, 'get');
		sandbox.spy(context, 'set');
	});

	afterEach(function () {
		sandbox.restore();
	});

	it('should update every slots context when uap is updated', () => {
		context.get.withArgs('slots').returns({TOP_LEADERBOARD: {}, TOP_RIGHT_BOXAD: {}});
		context.get.withArgs('slots.TOP_LEADERBOARD.nonUapSlot').returns(undefined);
		context.get.withArgs('slots.TOP_RIGHT_BOXAD.nonUapSlot').returns(undefined);

		universalAdPackage.init({
			'uap': UAP_ID
		});

		expect(context.set.calledWith('slots.TOP_LEADERBOARD.targeting.uap', UAP_ID)).to.equal(true);
		expect(context.set.calledWith('slots.TOP_RIGHT_BOXAD.targeting.uap', UAP_ID)).to.equal(true);
		expect(context.set.calledTwice);
	});

	it('should not update slot with blocked uap parameter', () => {
		context.get.withArgs('slots').returns({
			TOP_LEADERBOARD: {},
			NON_UAP_SLOT: {
				nonUapSlot: true
			},
			TOP_RIGHT_BOXAD: {}
		});

		universalAdPackage.init({
			'uap': UAP_ID
		});

		expect(context.set.calledWith('slots.TOP_LEADERBOARD.targeting.uap', UAP_ID)).to.equal(true);
		expect(context.set.calledWith('slots.TOP_RIGHT_BOXAD.targeting.uap', UAP_ID)).to.equal(true);
		expect(context.set.neverCalledWith('slots.NON_UAP_SLOT.targeting.uap', UAP_ID)).to.equal(true);
		expect(context.set.calledTwice).to.equal(true);
	});
});
