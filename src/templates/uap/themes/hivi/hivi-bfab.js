import { context, scrollListener, slotService, slotTweaker, utils } from '@wikia/ad-engine';
import { mapValues } from 'lodash';

import { BigFancyAdHiviTheme } from './hivi-theme';
import { Stickiness } from './stickiness';
import { resolvedState } from '../../resolved-state';
import { resolvedStateSwitch } from '../../resolved-state-switch';
import {
	CSS_CLASSNAME_FADE_IN_ANIMATION, CSS_CLASSNAME_SLIDE_OUT_ANIMATION,
	CSS_CLASSNAME_STICKY_BFAB, SLIDE_OUT_TIME, FADE_IN_TIME
} from '../../constants';
import { animate } from '../../ui/animate';

export class BfabTheme extends BigFancyAdHiviTheme {
	constructor(adSlot, params) {
		super(adSlot, params);

		this.stickiness = null;
		this.video = null;
		this.isLocked = false;
		this.config = context.get('templates.bfab');

		if (this.params.isSticky && this.config.stickinessAllowed) {
			this.addStickinessPlugin();
		}
	}

	onAdReady() {
		super.onAdReady();

		if (!this.config.defaultStateAllowed) {
			this.params.resolvedStateForced = true;
		}

		if (resolvedState.isResolvedState(this.params)) {
			this.setResolvedState();
		} else {
			resolvedStateSwitch.updateInformationAboutSeenDefaultStateAd();
			this.updateAdSizes();
			slotTweaker.makeResponsive(this.adSlot, this.params.config.aspectRatio.default);
		}
	}

	onVideoReady(video) {
		super.onVideoReady(video);

		this.video = video;
		video.addEventListener('wikiaAdStarted', () => this.updateAdSizes());
		video.addEventListener('wikiaAdCompleted', () => this.setResolvedState());
		video.addEventListener('wikiaFullscreenChange', () => {
			if (video.isFullscreen()) {
				this.stickiness.blockRevertStickiness();
				this.container.classList.add('theme-video-fullscreen');
			} else {
				this.stickiness.unblockRevertStickiness();
				this.container.classList.remove('theme-video-fullscreen');
				this.updateAdSizes();
			}
		});
	}

	updateAdSizes() {
		const state = resolvedState.isResolvedState(this.params) ? 'resolved' : 'default';
		const stateHeight = this.params.config.state.height[state];
		const relativeHeight = this.params.container.offsetHeight * (stateHeight / 100);

		this.adjustVideoSize(relativeHeight);

		if (this.params.thumbnail) {
			this.setThumbnailStyle(state);
		}
	}

	adjustVideoSize(relativeHeight) {
		if (this.video && !this.video.isFullscreen()) {
			this.video.container.style.width = `${this.params.videoAspectRatio * relativeHeight}px`;
		}
	}

	async setResolvedState() {
		const { config, image2 } = this.params;

		this.container.classList.add('theme-resolved');
		image2.element.classList.remove('hidden-state');
		await slotTweaker.makeResponsive(this.adSlot, config.aspectRatio.resolved);

		if (this.params.thumbnail) {
			this.setThumbnailStyle('resolved');
		}
	}

	setThumbnailStyle(state = 'default') {
		const { thumbnail } = this.params;
		const style = mapValues(this.params.config.state, styleProperty => `${styleProperty[state]}%`);

		Object.assign(thumbnail.style, style);

		if (this.video) {
			Object.assign(this.video.container.style, style);
		}
	}

	waitForScrollAndUnstickedBfaa() {
		let resolvePromise = null;

		const promise = new Promise((resolve) => {
			resolvePromise = resolve;
		});
		const bfaa = slotService.get(this.config.bfaaSlotName);

		scrollListener.addCallback((event, id) => {
			const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop,
				slotPosition = utils.getTopOffset(this.adSlot.getElement()),
				isBfaaSticky = bfaa.getElement().classList.contains('sticky-bfaa'),
				bfaaHeight = bfaa.getElement().offsetHeight;

			if (isBfaaSticky && scrollPosition >= slotPosition - this.config.topThreshold - bfaaHeight) {
				scrollListener.removeCallback(id);
				this.adSlot.setStatus('viewport-conflict');
			} else if (scrollPosition >= slotPosition - this.config.topThreshold && !isBfaaSticky) {
				scrollListener.removeCallback(id);
				resolvePromise();
			}
		});

		return promise;
	}

	async addStickinessPlugin() {
		await this.waitForScrollAndUnstickedBfaa();

		if (!this.adSlot.isViewed()) {
			this.addUnstickLogic();
			this.addUnstickButton();
			this.addUnstickEvents();
			this.stickiness.run();

			scrollListener.addCallback((event, id) => {
				const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

				if (scrollPosition <= this.config.unstickInstantlyBelowPosition) {
					scrollListener.removeCallback(id);
					this.stickiness.revertStickiness();
				}
			});
		}
	}

	addUnstickLogic() {
		const whenResolvedAndVideoViewed = async () => {
			await utils.wait(BfabTheme.DEFAULT_UNSTICK_DELAY);
		};

		this.stickiness = new Stickiness(this.adSlot, whenResolvedAndVideoViewed());
	}

	async onStickinessChange(isSticky) {
		const element = this.adSlot.getElement();
		if (!isSticky) {
			await animate(this.adSlot, CSS_CLASSNAME_SLIDE_OUT_ANIMATION, SLIDE_OUT_TIME);
			element.style.top = null;
			element.parentNode.style.height = null;
			element.classList.remove(CSS_CLASSNAME_STICKY_BFAB);
			animate(this.adSlot, CSS_CLASSNAME_FADE_IN_ANIMATION, FADE_IN_TIME);
		} else {
			element.parentNode.style.height = `${element.offsetHeight}px`;
			element.classList.add(CSS_CLASSNAME_STICKY_BFAB);
			element.style.top = `${this.config.topThreshold}px`;
		}
	}

	onCloseClicked() {
		this.unstickImmediately();

		this.adSlot.getElement().parentNode.style.height = null;
		this.adSlot.disable();
		this.adSlot.collapse();
	}

	unstickImmediately(stopVideo = true) {
		if (this.stickiness) {
			this.adSlot.getElement().classList.remove(CSS_CLASSNAME_STICKY_BFAB);

			if (stopVideo && this.video && this.video.ima.getAdsManager()) {
				this.video.stop();
			}

			this.stickiness.sticky = false;
		}
	}
}
