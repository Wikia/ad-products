import QueryString from 'ad-engine/src/utils/query-string';
import { once } from 'ad-engine/src/utils/event';
import ResolvedStateSwitch from './resolved-state-switch';

function getQueryParam() {
	return QueryString.get('resolved_state', null);
}

function isForcedByURLParam() {
	return [true, 'true', '1'].indexOf(getQueryParam()) > -1;
}

function isBlockedByURLParam() {
	return [false, 'blocked', 'false', '0'].indexOf(getQueryParam()) > -1;
}

function setResolvedState(params) {
	const promises = [];

	params.aspectRatio = params.resolvedStateAspectRatio;
	promises.push(Promise.resolve(params));
	params.image1.element.src = params.image1.resolvedStateSrc;
	promises.push(once(params.image1.element, 'load'));

	if (params.image2 && params.image2.resolvedStateSrc) {
		params.image2.element.src = params.image2.resolvedStateSrc;
		promises.push(once(params.image2.element, 'load'));
	}

	return Promise.all(promises);
}

function templateSupportsResolvedState(params) {
	return !!(params.image1 && params.image1.resolvedStateSrc);
}

function setDefaultState(params) {
	const promises = [];

	params.image1.element.src = params.image1.defaultStateSrc;
	promises.push(once(params.image1.element, 'load'));

	if (params.image2 && params.image2.defaultStateSrc) {
		params.image2.element.src = params.image2.defaultStateSrc;
		promises.push(once(params.image2.element, 'load'));
	}

	return Promise.all(promises);
}

function isResolvedState(params) {
	let result = false;

	if (templateSupportsResolvedState(params)) {
		const showResolvedState = !isBlockedByURLParam();
		let defaultStateSeen = true;

		if (showResolvedState) {
			defaultStateSeen = ResolvedStateSwitch.wasDefaultStateSeen() || isForcedByURLParam();
		}

		result = showResolvedState && defaultStateSeen;
	}

	return result;
}

export default {
	setImage(videoSettings) {
		const params = videoSettings.getParams();

		if (templateSupportsResolvedState(params)) {
			if (videoSettings.isResolvedState()) {
				return setResolvedState(params).then(([updatedParams, ...args]) => {
					videoSettings.updateParams(updatedParams);
					return [updatedParams, ...args];
				});
			}

			ResolvedStateSwitch.updateInformationAboutSeenDefaultStateAd();
			return setDefaultState(params);
		}

		return Promise.resolve();
	},
	isResolvedState
};
