import Context from 'ad-engine/src/services/context-service';
import SlotTweaker from 'ad-engine/src/services/slot-tweaker';

export default class StickyUap {

	constructor(adSlot) {
		this.adSlot = adSlot;
		this.stickinessDelay = 0;
		this.viewabilityCheckWindow = 5000;
		this.config = Context.get('templates.bfaa');
		this.container = document.getElementById(this.adSlot.getId());
		this.videoSettings = null;

		SlotTweaker.onReady(this.adSlot).then(() => {
			this.checkViewability();
		});
	}

	applyStickiness() {
		// var $topAds = $('.WikiaTopAds'),
		// 	$topAdsInner = $topAds.find('.WikiaTopAdsInner'),
		// 	$globalNav = $('#globalNavigation'),
		// 	adHeight = $topAdsInner.height(),
		// 	isBfaaPinned = $globalNav.hasClass('bfaa-pinned');
		//
		// $globalNav.css({
		// 	position: 'fixed',
		// 	top: (isBfaaPinned ? (adHeight - top.scrollY) : 0) + 'px',
		// 	transform: 'translate3d(0, 0, 0)', // GPU acceleration
		// 	backfaceVisibility: 'hidden'
		// });
		// $topAds.css({height: adHeight, 'z-index': 5000101});
		// $topAdsInner.css({
		// 	position: 'fixed',
		// 	top: (isBfaaPinned ? -top.scrollY : -adHeight) + 'px',
		// 	width: '100%',
		// 	left: 0,
		// 	padding: 0,
		// 	background: 'white',
		// 	transform: 'translate3d(0, 0, 0)', // GPU acceleration
		// 	backfaceVisibility: 'hidden'
		// });
		// setTimeout(function () {
		// 	$globalNav.css({top: adHeight + 'px', transition: 'top 1s'});
		// 	$topAdsInner.css({top: 0, transition: 'top 1s'});
		// }, 0);
		console.log("Applying sctickiness");

		return function revert() {
			console.log("Reverting sctickiness");
			// var isBfaaPinned = $globalNav.hasClass('bfaa-pinned');
			//
			// $globalNav.css({top: (isBfaaPinned ? (adHeight - top.scrollY) : 0) + 'px'});
			// $topAdsInner.css({top: (isBfaaPinned ? -top.scrollY : -adHeight) + 'px'});
			//
			// setTimeout(function () {
			// 	$globalNav.css({
			// 		position: '',
			// 		top: '',
			// 		transition: '',
			// 		transform: '',
			// 		backfaceVisibility: ''
			// 	});
			// 	$topAds.css({height: '', 'z-index': ''});
			// 	$topAdsInner.css({
			// 		position: '',
			// 		background: '',
			// 		padding: '',
			// 		width: '',
			// 		top: '',
			// 		left: '',
			// 		transform: '',
			// 		backfaceVisibility: ''
			// 	});
			// }, 1000);
		};
	}

	onStickinessApplyTimeout() {
		let revertStickiness = function () {},
			viewabilityCheckTimeout = null,
			isOnViewedFired = false;

		function onViewed() {
			const revertTimeout = setTimeout(onRevertTimeout, 10000),
				globalNavigation = document.getElementById('globalNavigation');

			function onRevertTimeout() {
				clearTimeout(revertTimeout);
				document.removeEventListener('scroll', onRevertTimeout);
				revertStickiness();
			}

			isOnViewedFired = true;
			clearTimeout(viewabilityCheckTimeout);
			viewabilityCheckTimeout = null;
			document.addEventListener('scroll', onRevertTimeout);
			// TODO: track
			//trackEvent(events.VIEWABLE, true);

			// TODO: will it work on f2?
			if (!globalNavigation || globalNavigation && globalNavigation.classList.contains('bfaa-pinned')) {
				onRevertTimeout();
			}
		}

		function onTabActive() {
			viewabilityCheckTimeout = setTimeout(onViewed, this.viewabilityCheckWindow);
			// we wanted to run it only once
			document.removeEventListener('visibilitychange', onTabActive);
		}

		console.log("removeEventListener('scroll', this.onPreleaderboardScroll!");
		document.removeEventListener('scroll', this.onPreleaderboardScrollHandler);

		if (document.hidden) {
			// let's start ticking from the moment when browser tab is active
			document.addEventListener('visibilitychange', onTabActive);
		} else {
			viewabilityCheckTimeout = setTimeout(onViewed, this.viewabilityCheckWindow);
		}

		if (this.adSlot.isViewed) {
			onViewed();
		} else {
			revertStickiness = this.applyStickiness();

			this.adSlot.on('slotViewed', () => {
				// don't send events once again if onViewed was fired by timeout
				if (!isOnViewedFired) {
					onViewed();
				}
			});
		}
	}

	onPreleaderboardScroll() {
		console.log('onPreleaderboardScroll');
		const communityHeader = document.getElementsByClassName('wds-community-header')[0];

		if (communityHeader) {
			const normalizedScrollPosition = document.scrollY - communityHeader.offsetTop,
				WikiaTopAdsInner = document.getElementsByClassName('WikiaTopAdsInner')[0];

			if (document.scrollY - communityHeader.offsetTop === normalizedScrollPosition ||
				document.scrollY - communityHeader.offsetTop + WikiaTopAdsInner.height - 90 === normalizedScrollPosition) {
				// user didn't scroll - ad appeared and moved content down
				return;
			}
		}

		clearTimeout(this.stickinessApplyTimeout);
		this.onStickinessApplyTimeout();
	}

	checkViewability() {
		// after .bind() is called a new function reference is created so we need to keep reference to it
		this.onPreleaderboardScrollHandler = this.onPreleaderboardScroll.bind(this);
		this.stickinessApplyTimeout = setTimeout(this.onStickinessApplyTimeout.bind(this), this.stickinessDelay);

		document.addEventListener('scroll', this.onPreleaderboardScrollHandler);
	}
}
