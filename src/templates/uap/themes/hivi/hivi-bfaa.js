import { AdSlot, scrollListener, slotTweaker, utils } from '@wikia/ad-engine';
import { debounce, mapValues, isUndefined, toPlainObject } from 'lodash';
import { EventEmitter } from 'events';

import { BigFancyAdHiviTheme } from './hivi-theme';
import { Stickiness } from './stickiness';
import { resolvedState } from '../../resolved-state';
import { resolvedStateSwitch } from '../../resolved-state-switch';
import {
	CSS_CLASSNAME_FADE_IN_ANIMATION, CSS_CLASSNAME_SLIDE_OUT_ANIMATION,
	CSS_CLASSNAME_STICKY_BFAA, SLIDE_OUT_TIME, FADE_IN_TIME
} from '../../constants';
import { animate } from '../../../interface/animate';

const HIVI_RESOLVED_THRESHOLD = 0.995;

export class BfaaTheme extends BigFancyAdHiviTheme {
	static RESOLVED_STATE_EVENT = Symbol('RESOLVED_STATE_EVENT');

	constructor(adSlot, params) {
		super(adSlot, params);
		Object.assign(this, toPlainObject(new EventEmitter()));

		this.stickiness = null;
		this.scrollListener = null;
		this.video = null;
		this.isLocked = false;
		this.onResolvedStateScroll = null;

		if (this.params.isSticky && this.config.stickinessAllowed) {
			this.addStickinessPlugin();
		}

		if (!this.config.defaultStateAllowed) {
			this.params.resolvedStateForced = true;
		}
	}

	addStickinessPlugin() {
		this.addUnstickLogic();
		this.addUnstickButton();
		this.addUnstickEvents();
		this.stickiness.run();
	}

	addUnstickLogic() {
		const { stickyAdditionalTime, stickyUntilVideoViewed } = this.params;
		const whenResolvedAndVideoViewed = async () => {
			await Promise.all([
				utils.once(this, BfaaTheme.RESOLVED_STATE_EVENT),
				stickyUntilVideoViewed ?
					utils.once(this.adSlot, AdSlot.VIDEO_VIEWED_EVENT) :
					Promise.resolve()
			]);
			await utils.wait(
				isUndefined(stickyAdditionalTime) ?
					BfaaTheme.DEFAULT_UNSTICK_DELAY :
					stickyAdditionalTime
			);
		};

		this.stickiness = new Stickiness(this.adSlot, whenResolvedAndVideoViewed());
	}

	onAdReady() {
		super.onAdReady();

		if (resolvedState.isResolvedState(this.params)) {
			this.setResolvedState(true);
		} else {
			resolvedStateSwitch.updateInformationAboutSeenDefaultStateAd();
			this.scrollListener = scrollListener.addCallback(() => this.updateAdSizes());
			// Manually run update on scroll once
			this.updateAdSizes();
		}
	}

	onVideoReady(video) {
		super.onVideoReady(video);

		this.video = video;
		video.addEventListener('wikiaAdStarted', () => {
			this.updateAdSizes();

			if (!video.params.autoPlay) {
				this.resetResolvedState();
			}
		});
		video.addEventListener('wikiaAdCompleted', () => {
			if (!this.isLocked) {
				this.setResolvedState(true);
			}
		});
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

	async onStickinessChange(isSticky) {
		const stickinessBeforeCallback = isSticky ?
			this.config.onBeforeStickBfaaCallback :
			this.config.onBeforeUnstickBfaaCallback;
		const stickinessAfterCallback = isSticky ?
			this.config.onAfterStickBfaaCallback :
			this.config.onAfterUnstickBfaaCallback;

		stickinessBeforeCallback.call(this.config, this.adSlot, this.params);

		if (!isSticky) {
			this.config.moveNavbar(0, SLIDE_OUT_TIME);
			await animate(this.adSlot, CSS_CLASSNAME_SLIDE_OUT_ANIMATION, SLIDE_OUT_TIME);
			this.adSlot.getElement().classList.remove(CSS_CLASSNAME_STICKY_BFAA);
			animate(this.adSlot, CSS_CLASSNAME_FADE_IN_ANIMATION, FADE_IN_TIME);
		} else {
			this.adSlot.getElement().classList.add(CSS_CLASSNAME_STICKY_BFAA);
		}

		stickinessAfterCallback.call(this.config, this.adSlot, this.params);
	}

	onCloseClicked() {
		this.unstickImmediately();

		this.config.mainContainer.style.paddingTop = '0';

		this.adSlot.disable();
		this.adSlot.collapse();
	}

	unstickImmediately(stopVideo = true) {
		scrollListener.removeCallback(this.scrollListener);
		this.adSlot.getElement().classList.remove(CSS_CLASSNAME_STICKY_BFAA);

		if (stopVideo && this.video && this.video.ima.getAdsManager()) {
			this.video.stop();
		}

		this.config.moveNavbar(0, 0);
		this.stickiness.sticky = false;
	}

	updateAdSizes() {
		const { aspectRatio, state } = this.params.config;
		const { mainContainer: { offsetWidth: currentWidth } } = this.config;
		const isResolved = this.container.classList.contains('theme-resolved');
		const maxHeight = currentWidth / aspectRatio.default;
		const minHeight = currentWidth / aspectRatio.resolved;
		const scrollY = (window.scrollY || window.pageYOffset || 0);
		const aspectScroll = this.isLocked ? minHeight : Math.max(minHeight, maxHeight - scrollY);
		const currentAspectRatio = currentWidth / aspectScroll;
		const aspectRatioDiff = aspectRatio.default - aspectRatio.resolved;
		const currentDiff = aspectRatio.default - currentAspectRatio;
		const currentState = 1 - ((aspectRatioDiff - currentDiff) / aspectRatioDiff);
		const heightDiff = state.height.default - state.height.resolved;
		const heightFactor = (state.height.default - (heightDiff * currentState)) / 100;
		const relativeHeight = aspectScroll * heightFactor;

		this.adjustVideoSize(relativeHeight);

		if (this.params.thumbnail) {
			this.setThumbnailStyle(currentState);
		}

		if (currentState >= HIVI_RESOLVED_THRESHOLD && !isResolved) {
			this.setResolvedState();
		} else if (currentState < HIVI_RESOLVED_THRESHOLD && isResolved) {
			this.container.style.top = '';
			this.switchImagesInAd(false);
		}

		return slotTweaker.makeResponsive(this.adSlot, currentAspectRatio);
	}

	adjustVideoSize(relativeHeight) {
		if (this.video && !this.video.isFullscreen()) {
			this.video.container.style.width = `${this.params.videoAspectRatio * relativeHeight}px`;
		}
	}

	setThumbnailStyle(state) {
		const style = mapValues(this.params.config.state, (styleProperty) => {
			const diff = styleProperty.default - styleProperty.resolved;
			return `${(styleProperty.default - diff * state)}%`;
		});

		Object.assign(this.params.thumbnail.style, style);

		if (this.video) {
			Object.assign(this.video.container.style, style);

			if (this.video.isFullscreen()) {
				this.video.container.style.height = '100%';
			}
		}
	}

	switchImagesInAd(isResolved) {
		if (isResolved) {
			this.container.classList.add('theme-resolved');
			this.params.image2.element.classList.remove('hidden-state');
		} else {
			this.container.classList.remove('theme-resolved');
			this.params.image2.element.classList.add('hidden-state');
		}
	}

	lock() {
		const offset = this.getHeightDifferenceBetweenStates();

		this.isLocked = true;
		this.container.classList.add('theme-locked');
		scrollListener.removeCallback(this.scrollListener);
		this.adjustSizesToResolved(offset);
		this.emit(BfaaTheme.RESOLVED_STATE_EVENT);
	}

	unlock() {
		this.isLocked = false;
		this.container.classList.remove('theme-locked');
		this.scrollListener = scrollListener.addCallback(() => this.updateAdSizes());
	}

	setResolvedState(immediately) {
		const isSticky = this.stickiness && this.stickiness.isSticky();
		const width = this.container.offsetWidth;
		const { aspectRatio } = this.params.config;
		const resolvedHeight = width / aspectRatio.resolved;
		const offset = this.getHeightDifferenceBetweenStates();

		if (isSticky) {
			this.config.moveNavbar(resolvedHeight, SLIDE_OUT_TIME);
		} else {
			this.container.style.top = `${Math.min(window.scrollY, offset)}px`;
		}

		this.switchImagesInAd(true);

		if (this.onResolvedStateScroll) {
			window.removeEventListener('scroll', this.onResolvedStateScroll);
			this.onResolvedStateScroll.cancel();
		}

		return new Promise((resolve) => {
			if (immediately) {
				this.lock();
				resolve();
			} else {
				this.onResolvedStateScroll = debounce(() => {
					if (window.scrollY < offset) {
						return;
					}

					window.removeEventListener('scroll', this.onResolvedStateScroll);
					this.onResolvedStateScroll = null;
					this.lock();
					resolve();
				}, 50);
				window.addEventListener('scroll', this.onResolvedStateScroll);
				this.onResolvedStateScroll();
			}
		});
	}

	resetResolvedState() {
		const offset = this.getHeightDifferenceBetweenStates();

		if (this.isLocked && this.config.defaultStateAllowed && window.scrollY < offset) {
			const aspectRatio = this.params.config.aspectRatio.default;

			this.container.style.top = '';
			this.config.mainContainer.style.paddingTop = `${100 / aspectRatio}%`;

			if (this.params.isSticky && this.config.stickinessAllowed) {
				this.unstickImmediately(false);
			}

			this.unlock();
			this.switchImagesInAd(false);
			this.setResolvedState(false);
			this.updateAdSizes();
		}
	}

	getHeightDifferenceBetweenStates() {
		const width = this.container.offsetWidth;
		const { aspectRatio } = this.params.config;

		return Math.round(width / aspectRatio.default - width / aspectRatio.resolved);
	}

	adjustSizesToResolved(offset) {
		if (this.adSlot.isEnabled()) {
			const aspectRatio = this.params.config.aspectRatio.resolved;

			this.container.style.top = '';
			this.config.mainContainer.style.paddingTop = `${100 / aspectRatio}%`;
			slotTweaker.makeResponsive(this.adSlot, aspectRatio);
			window.scrollBy(0, -Math.min(offset, window.scrollY));
			this.updateAdSizes();
		}
	}
}
