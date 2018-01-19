import { utils } from '@wikia/ad-engine';
import { resolvedStateSwitch } from './resolved-state-switch';

const DEFAULT_STATE = 'default';
const RESOLVED_STATE = 'resolved';

function getQueryParam() {
	return utils.queryString.get('resolved_state', null);
}

function isForcedByURLParam() {
	return [true, 'true', '1'].indexOf(getQueryParam()) > -1;
}

function isBlockedByURLParam() {
	return [false, 'blocked', 'false', '0'].indexOf(getQueryParam()) > -1;
}

function setState(state, params) {
	const { image1, image2 } = params;
	const promises = [];
	let srcPropertyName = 'defaultStateSrc';

	if (state === RESOLVED_STATE) {
		params.aspectRatio = params.resolvedStateAspectRatio;
		srcPropertyName = 'resolvedStateSrc';
	}

	promises.push(Promise.resolve(params));
	image1.element.src = image1[srcPropertyName];
	promises.push(Promise.race([
		utils.once(image1.element, 'load'),
		utils.once(image1.element, 'error')
	]));

	if (image2 && image2[srcPropertyName]) {
		image2.element.src = image2[srcPropertyName];
		promises.push(Promise.race([
			utils.once(image2.element, 'load'),
			utils.once(image2.element, 'error')
		]));
	}

	return Promise.all(promises);
}

function setDefaultState(params) {
	return setState(DEFAULT_STATE, params);
}

function setResolvedState(params) {
	return setState(RESOLVED_STATE, params);
}

function templateSupportsResolvedState(params) {
	return !!(params.image1 && params.image1.resolvedStateSrc) || params.theme === 'hivi';
}

function isResolvedState(params) {
	let result = false;

	if (templateSupportsResolvedState(params)) {
		const showResolvedState = !isBlockedByURLParam();
		let defaultStateSeen = true;

		if (showResolvedState) {
			defaultStateSeen = resolvedStateSwitch.wasDefaultStateSeen() || isForcedByURLParam();
		}

		result = showResolvedState && defaultStateSeen;
	}

	return result;
}

export const resolvedState = {
	async setImage(videoSettings) {
		const params = videoSettings.getParams();

		if (templateSupportsResolvedState(params)) {
			if (videoSettings.isResolvedState()) {
				const [updatedParams, ...args] = await setResolvedState(params);
				videoSettings.updateParams(updatedParams);
				return [updatedParams, ...args];
			}

			resolvedStateSwitch.updateInformationAboutSeenDefaultStateAd();
			return await setDefaultState(params);
		}

		return null;
	},
	isResolvedState
};
