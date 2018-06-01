import sinon from 'sinon';
import {expect} from 'chai';
import {context, slotService} from '@wikia/ad-engine';
import {universalAdPackage} from '../../../src/templates/uap/universal-ad-package';

describe('UniversalAdPackage', () => {
	const UAP_ID = 666;
	let sandbox;

	beforeEach(function () {
		sandbox = sinon.sandbox.create();
		sandbox.stub(context, 'get');
		sandbox.spy(context, 'set');
		sandbox.stub(slotService, 'getBySlotName').callsFake(function(){ return {getElement: function(){}}});
	});

	afterEach(function () {
		sandbox.restore();
	});

	it('should update every slots context when uap is updated', () => {
		context.get.withArgs('slots').returns({top_leaderboard: {}, top_boxad: {}});
		context.get.withArgs('slots.top_leaderboard.nonUapSlot').returns(undefined);
		context.get.withArgs('slots.top_boxad.nonUapSlot').returns(undefined);

		universalAdPackage.init({
			'uap': UAP_ID
		});

		expect(context.set.calledWith('slots.top_leaderboard.targeting.uap', UAP_ID)).to.equal(true);
		expect(context.set.calledWith('slots.top_boxad.targeting.uap', UAP_ID)).to.equal(true);
		expect(context.set.calledTwice);
	});

	it('should not update slot with blocked uap parameter', () => {
		context.get.withArgs('slots').returns({
			top_leaderboard: {},
			NON_UAP_SLOT: {
				nonUapSlot: true
			},
			top_boxad: {}
		});

		universalAdPackage.init({
			'uap': UAP_ID
		});

		expect(context.set.calledWith('slots.top_leaderboard.targeting.uap', UAP_ID)).to.equal(true);
		expect(context.set.calledWith('slots.top_boxad.targeting.uap', UAP_ID)).to.equal(true);
		expect(context.set.neverCalledWith('slots.NON_UAP_SLOT.targeting.uap', UAP_ID)).to.equal(true);
		expect(context.set.calledTwice).to.equal(true);
	});
});
