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
import { animate } from '../../../interface/animate';

export class BfabTheme extends BigFancyAdHiviTheme {
	constructor(adSlot, params) {
		super(adSlot, params);

		this.stickiness = null;
		this.video = null;
		this.isLocked = false;
		this.config = context.get('templates.bfab');
	}

	onAdReady() {
		super.onAdReady();

		if (this.params.isSticky && this.config.stickinessAllowed) {
			this.addStickinessPlugin();
		}

		if (!this.config.defaultStateAllowed) {
			this.params.resolvedStateForced = true;
		}

		if (resolvedState.isResolvedState(this.params)) {
			this.setResolvedState();
		} else {
			this.setThumbnailStyle();
			resolvedStateSwitch.updateInformationAboutSeenDefaultStateAd();
			slotTweaker.makeResponsive(this.adSlot, this.params.config.aspectRatio.default);
		}
	}

	onVideoReady(video) {
		super.onVideoReady(video);

		const setThumbnailStyle = () => {
			if (resolvedState.isResolvedState(this.params)) {
				this.setResolvedState(video);
			} else {
				this.setThumbnailStyle(video);
			}
		};

		video.addEventListener('wikiaAdStarted', setThumbnailStyle);
		video.addEventListener('wikiaAdCompleted', () => this.setResolvedState(video));
		video.addEventListener('wikiaFullscreenChange', () => {
			if (video.isFullscreen()) {
				this.container.classList.add('theme-video-fullscreen');
			} else {
				this.container.classList.remove('theme-video-fullscreen');
				setThumbnailStyle();
			}
		});
	}

	async setResolvedState(video) {
		const { config, image2 } = this.params;

		this.container.classList.add('theme-resolved');
		image2.element.classList.remove('hidden-state');
		await slotTweaker.makeResponsive(this.adSlot, config.aspectRatio.resolved);

		if (this.params.thumbnail) {
			this.setThumbnailStyle(video, 'resolved');
		}
	}

	setThumbnailStyle(video, state = 'default') {
		const { thumbnail } = this.params;
		const style = mapValues(this.params.config.state, styleProperty => `${styleProperty[state]}%`);

		Object.assign(thumbnail.style, style);

		if (video) {
			Object.assign(video.container.style, style);
			window.requestAnimationFrame(() => {
				video.resize(thumbnail.offsetWidth, thumbnail.offsetHeight);
			});
		}
	}

	waitForScrollAndUnstickedBfaa() {
		let resolvePromise = null;

		const promise = new Promise((resolve) => {
			resolvePromise = resolve;
		});
		const bfaa = slotService.get(this.config.bfaaSlotName);

		scrollListener.addCallback((event, id) => {
			if (this.adSlot.isViewed()) {
				scrollListener.removeCallback(id);
				return;
			}

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
					this.adSlot.setStatus('top-conflict');
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
			if (this.adSlot.getStatus() !== 'top-conflict') {
				await animate(this.adSlot, CSS_CLASSNAME_SLIDE_OUT_ANIMATION, SLIDE_OUT_TIME);
			}
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
