import Context from 'ad-engine/services/context-service';
//import LocalCache from '../../../../../src/scripts/main/utils/local-cache';

const cacheKey = 'adEngine_resolvedStateCounter',
	cacheTtl = 24 * 3600,
	now = new Date();

function readUapId() {
	return Context.get('slots.top-leaderboard.targeting.uap');
}

function createCacheKey() {
	return `${cacheKey}_${readUapId()}`;
}

function findRecordInCache() {
	//return LocalCache.get(createCacheKey());
}

function wasDefaultStateSeen() {
	const record = findRecordInCache();

	// check for presence in localStorage and if present, make sure that we're
	// not comparing to current session data - bfab that wants to load after bfaa
	return !!record && now.getTime() !== record.lastSeenDate;
}

function updateInformationAboutSeenDefaultStateAd() {
	//LocalCache.set(createCacheKey(), {
	//	adId: readUapId(),
	//	lastSeenDate: now.getTime()
	//}, cacheTtl);
}

export default {
	updateInformationAboutSeenDefaultStateAd,
	wasDefaultStateSeen
};
