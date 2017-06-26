import QueryString from 'ad-engine/utils/query-string';
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
	params.aspectRatio = params.resolvedStateAspectRatio;
	params.image1.element.src = params.image1.resolvedStateSrc;

	if (params.image2 && params.image2.resolvedStateSrc) {
		params.image2.element.src = params.image2.resolvedStateSrc;
	}
}

function templateSupportsResolvedState(params) {
	return !!(params.image1 && params.image1.resolvedStateSrc);
}

function setDefaultState(params) {
	params.image1.element.src = params.image1.defaultStateSrc;

	if (params.image2 && params.image2.defaultStateSrc) {
		params.image2.element.src = params.image2.defaultStateSrc;
	}
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
				setResolvedState(params);
			} else {
				setDefaultState(params);
				ResolvedStateSwitch.updateInformationAboutSeenDefaultStateAd();
			}
		}
	},
	isResolvedState: isResolvedState
};
