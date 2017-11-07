import Context from 'ad-engine/src/services/context-service';
import SlotTweaker from 'ad-engine/src/services/slot-tweaker';

export default class StickyUap {

	constructor(adSlot) {
		this.adSlot = adSlot;
		this.stickinessDelay = 0;
		this.config = Context.get('templates.bfaa');
		this.container = document.getElementById(this.adSlot.getId());
		this.videoSettings = null;

		SlotTweaker.onReady(this.adSlot, () => {
			this.checkViewability();
		});
	}

	applyStickiness() {
		var $topAds = $('.WikiaTopAds'),
			$topAdsInner = $topAds.find('.WikiaTopAdsInner'),
			$globalNav = $('#globalNavigation'),
			adHeight = $topAdsInner.height(),
			isBfaaPinned = $globalNav.hasClass('bfaa-pinned');

		$globalNav.css({
			position: 'fixed',
			top: (isBfaaPinned ? (adHeight - top.scrollY) : 0) + 'px',
			transform: 'translate3d(0, 0, 0)', // GPU acceleration
			backfaceVisibility: 'hidden'
		});
		$topAds.css({height: adHeight, 'z-index': 5000101});
		$topAdsInner.css({
			position: 'fixed',
			top: (isBfaaPinned ? -top.scrollY : -adHeight) + 'px',
			width: '100%',
			left: 0,
			padding: 0,
			background: 'white',
			transform: 'translate3d(0, 0, 0)', // GPU acceleration
			backfaceVisibility: 'hidden'
		});
		setTimeout(function () {
			$globalNav.css({top: adHeight + 'px', transition: 'top 1s'});
			$topAdsInner.css({top: 0, transition: 'top 1s'});
		}, 0);

		return function revert() {
			var isBfaaPinned = $globalNav.hasClass('bfaa-pinned');

			$globalNav.css({top: (isBfaaPinned ? (adHeight - top.scrollY) : 0) + 'px'});
			$topAdsInner.css({top: (isBfaaPinned ? -top.scrollY : -adHeight) + 'px'});

			setTimeout(function () {
				$globalNav.css({
					position: '',
					top: '',
					transition: '',
					transform: '',
					backfaceVisibility: ''
				});
				$topAds.css({height: '', 'z-index': ''});
				$topAdsInner.css({
					position: '',
					background: '',
					padding: '',
					width: '',
					top: '',
					left: '',
					transform: '',
					backfaceVisibility: ''
				});
			}, 1000);
		};
	}

	onStickinessApplyTimeout() {
		var revertStickiness = function () {},
			viewabilityCheckWindow = 5000,
			viewabilityCheckTimeout = null,
			isOnViewedFired = false;

		function onViewed() {
			var revertTimeout = setTimeout(onRevertTimeout, 10000);

			function onRevertTimeout() {
				clearTimeout(revertTimeout);
				$(top).off('scroll.leaderboard');
				// zrob to tylko, jeśli nie zostało włączone manualnie
				revertStickiness();
			}

			isOnViewedFired = true;
			clearTimeout(viewabilityCheckTimeout);
			viewabilityCheckTimeout = null;
			$(top).on('scroll.leaderboard', onRevertTimeout);
			trackEvent(events.VIEWABLE, true);

			if ($('#globalNavigation').hasClass('bfaa-pinned')) {
				onRevertTimeout();
			}
		}

		//debugger

		$(top).off('scroll.preleaderboard');

		if (top.document.hidden) {
			// let's start ticking from the moment when browser tab is active
			$(top).one('visibilitychange', function () {
				viewabilityCheckTimeout = setTimeout(onViewed, viewabilityCheckWindow);
			});
		} else {
			viewabilityCheckTimeout = setTimeout(onViewed, viewabilityCheckWindow);
		}

		if (this.adSlot.isViewed || videoManuallyTriggered) {
			onViewed();
		} else {
			revertStickiness = this.applyStickiness();

			this.adSlot.post('viewed', function () {
				// don't send events once again if onViewed was fired by timeout
				if (!isOnViewedFired) {
					onViewed();
				}
			});
		}
	}

	checkViewability() {
		const desktopNavbarWrapper = document.querySelector(this.config.desktopNavbarWrapperSelector);

		const stickinessApplyTimeout = setTimeout(this.onStickinessApplyTimeout, this.stickinessDelay);
		//debugger

		//var normalizedScrollPosition = top.scrollY - $('.wds-community-header').offset().top;

		document.addEventListener('scroll.preleaderboard', function() {
			clearTimeout(stickinessApplyTimeout);
			this.onStickinessApplyTimeout();
		});
		// $(top).on('scroll.preleaderboard', function () {
		// 	if (top.scrollY - $('.wds-community-header').offset().top === normalizedScrollPosition ||
		// 		top.scrollY - $('.wds-community-header').offset().top + $('.WikiaTopAdsInner').height() - 90 === normalizedScrollPosition) {
		// 		// user didn't scroll - ad appeared and moved content down
		// 		return;
		// 	}
		//
		// 	clearTimeout(stickinessApplyTimeout);
		// 	this.onStickinessApplyTimeout();
		// });
	}
}
