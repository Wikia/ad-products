import UniversalAdPackage from './universal-ad-package';
import LocalCache from 'ad-engine/src/services/local-cache';

const cacheKey = 'adEngine_resolvedStateCounter',
	cacheTtl = 24 * 3600,
	now = new Date();

function createCacheKey() {
	return `${cacheKey}_${UniversalAdPackage.getUapId()}`;
}

function findRecordInCache() {
	return LocalCache.get(createCacheKey());
}

function wasDefaultStateSeen() {
	const record = findRecordInCache();

	// check for presence in localStorage and if present, make sure that we're
	// not comparing to current session data - bfab that wants to load after bfaa
	return !!record && now.getTime() !== record.lastSeenDate;
}

function updateInformationAboutSeenDefaultStateAd() {
	LocalCache.set(createCacheKey(), {
		adId: UniversalAdPackage.getUapId(),
		lastSeenDate: now.getTime()
	}, cacheTtl);
}

export default {
	updateInformationAboutSeenDefaultStateAd,
	wasDefaultStateSeen
};
