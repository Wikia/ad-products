import sinon from 'sinon';
import {expect} from 'chai';
import UniversalAdPackage from "../../../src/modules/templates/uap/universal-ad-package";
import Context from 'ad-engine/src/services/context-service';

describe('UniversalAdPackage', () => {
	const UAP_ID = 666;
	let sandbox;

	beforeEach(function () {
		sandbox = sinon.sandbox.create();
		sandbox.stub(Context, 'get');
		sandbox.spy(Context, 'set');
	});

	afterEach(function () {
		sandbox.restore();
	});

	it('should update every slots context when uap is updated', () => {
		Context.get.withArgs('slots').returns({TOP_LEADERBOARD: {}, TOP_RIGHT_BOXAD: {}});
		Context.get.withArgs('slots.TOP_LEADERBOARD.nonUapSlot').returns(undefined);
		Context.get.withArgs('slots.TOP_RIGHT_BOXAD.nonUapSlot').returns(undefined);

		UniversalAdPackage.init({
			'uap': UAP_ID
		});

		expect(Context.set.calledWith('slots.TOP_LEADERBOARD.targeting.uap', UAP_ID)).to.equal(true);
		expect(Context.set.calledWith('slots.TOP_RIGHT_BOXAD.targeting.uap', UAP_ID)).to.equal(true);
		expect(Context.set.calledTwice);
	});

	it('should not update slot with blocked uap parameter', () => {
		Context.get.withArgs('slots').returns({
			TOP_LEADERBOARD: {},
			NON_UAP_SLOT: {
				nonUapSlot: true
			},
			TOP_RIGHT_BOXAD: {}
		});

		UniversalAdPackage.init({
			'uap': UAP_ID
		});

		expect(Context.set.calledWith('slots.TOP_LEADERBOARD.targeting.uap', UAP_ID)).to.equal(true);
		expect(Context.set.calledWith('slots.TOP_RIGHT_BOXAD.targeting.uap', UAP_ID)).to.equal(true);
		expect(Context.set.neverCalledWith('slots.NON_UAP_SLOT.targeting.uap', UAP_ID)).to.equal(true);
		expect(Context.set.calledTwice).to.equal(true);
	});
});
