import { AdSlot, context, scrollListener, slotTweaker, utils } from '@wikia/ad-engine';
import { debounce, mapValues, isUndefined, toPlainObject } from 'lodash';
import { EventEmitter } from 'events';

import AdvertisementLabel from '../../ui/advertisement-label';
import CloseButton from '../../ui/close-button';
import { BigFancyAdTheme } from '../theme';
import { StickyBfaa } from './sticky-bfaa';
import { resolvedState } from '../../resolved-state';
import { resolvedStateSwitch } from '../../resolved-state-switch';

const HIVI_RESOLVED_THRESHOLD = 0.995;

class BigFancyAdHiviTheme extends BigFancyAdTheme {
	onAdReady() {
		super.onAdReady();
		this.container.classList.add('theme-hivi');
		this.addAdvertisementLabel();
	}

	addAdvertisementLabel() {
		const advertisementLabel = new AdvertisementLabel();

		this.container.appendChild(advertisementLabel.render());
	}
}

export class BfaaTheme extends BigFancyAdHiviTheme {
	static RESOLVED_STATE_EVENT = Symbol('RESOLVED_STATE_EVENT');
	static DEFAULT_UNSTICK_DELAY = 3000;

	constructor(adSlot, params) {
		super(adSlot, params);
		Object.assign(this, toPlainObject(new EventEmitter()));

		this.stickyBfaa = null;
		this.scrollListener = null;
		this.video = null;
		this.config = context.get('templates.bfaa');
		this.isLocked = false;
		this.onResolvedStateScroll = null;

		if (this.params.isSticky) {
			this.addStickinessPlugin();
		}
	}

	addStickinessPlugin() {
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

		this.stickyBfaa = new StickyBfaa(this.adSlot, whenResolvedAndVideoViewed());
		this.addUnstickButton();
		this.stickyBfaa.on(StickyBfaa.STICKINESS_CHANGE_EVENT, isSticky => this.onStickinessChange(isSticky));
		this.stickyBfaa.run();
	}

	addUnstickButton() {
		const closeButton = new CloseButton({
			classNames: ['button-unstick'],
			onClick: () => {
				this.stickyBfaa.revertStickiness();
				if (this.video) {
					this.video.pause();
				}
			}
		});

		this.container.appendChild(closeButton.render());
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
		super.onVideoReady();

		this.video = video;
		video.addEventListener('wikiaAdStarted', () => this.updateAdSizes());
		video.addEventListener('wikiaAdCompleted', () => {
			if (!this.isLocked) {
				this.setResolvedState(true);
			}
		});
		video.addEventListener('wikiaFullscreenChange', () => {
			if (video.isFullscreen()) {
				this.stickyBfaa.blockRevertStickiness();
				this.container.classList.add('theme-video-fullscreen');
			} else {
				this.stickyBfaa.unblockRevertStickiness();
				this.container.classList.remove('theme-video-fullscreen');
				this.updateAdSizes();
			}
		});
	}

	onStickinessChange(isSticky) {
		const stickinessCallback = isSticky ? this.config.onStickBfaaCallback : this.config.onUnstickBfaaCallback;

		stickinessCallback.call(this.config, this.adSlot, this.params);

		if (!isSticky) {
			this.config.moveNavbar(0);
		}
	}

	updateAdSizes() {
		const config = this.params.config;
		const currentWidth = document.body.offsetWidth;
		const isResolved = this.container.classList.contains('theme-resolved');
		const maxHeight = currentWidth / config.aspectRatio.default;
		const minHeight = currentWidth / config.aspectRatio.resolved;
		const aspectScroll = this.isLocked ? minHeight : Math.max(minHeight, maxHeight - window.scrollY);
		const currentAspectRatio = currentWidth / aspectScroll;
		const aspectRatioDiff = config.aspectRatio.default - config.aspectRatio.resolved;
		const currentDiff = config.aspectRatio.default - currentAspectRatio;
		const currentState = 1 - ((aspectRatioDiff - currentDiff) / aspectRatioDiff);
		const diff = config.state.height.default - config.state.height.resolved;
		const value = (config.state.height.default - (diff * currentState)) / 100;

		this.adjustVideoSize(aspectScroll * value);

		if (this.params.thumbnail) {
			this.setThumbnailStyle(currentState);
		}

		if (currentState >= HIVI_RESOLVED_THRESHOLD && !isResolved) {
			this.setResolvedState();
		} else if (currentState < HIVI_RESOLVED_THRESHOLD && isResolved) {
			this.container.style.top = '';
			this.switchImagesInAd(false);
		}

		slotTweaker.makeResponsive(this.adSlot, currentAspectRatio);
	}

	adjustVideoSize(value) {
		if (this.video && !this.video.isFullscreen()) {
			this.video.container.style.width = `${this.params.videoAspectRatio * value}px`;
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

	setResolvedState(immediately) {
		const isSticky = this.stickyBfaa && this.stickyBfaa.isSticky();
		const width = this.container.offsetWidth;
		const aspectRatio = this.params.config.aspectRatio;
		const resolvedHeight = width / aspectRatio.resolved;
		const offset = this.getHeightDifferenceBetweenStates();

		if (isSticky) {
			this.config.moveNavbar(resolvedHeight);
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

	getHeightDifferenceBetweenStates() {
		const width = this.container.offsetWidth;
		const aspectRatio = this.params.config.aspectRatio;

		return Math.round(width / aspectRatio.default - width / aspectRatio.resolved);
	}

	adjustSizesToResolved(offset) {
		const aspectRatio = this.params.config.aspectRatio.resolved;

		this.container.style.top = '';
		document.body.style.paddingTop = `${100 / aspectRatio}%`;
		slotTweaker.makeResponsive(this.adSlot, aspectRatio);
		window.scrollBy(0, -Math.min(offset, window.scrollY));
		this.updateAdSizes();
	}
}

export class BfabTheme extends BigFancyAdHiviTheme {
	onAdReady() {
		super.onAdReady();

		slotTweaker.makeResponsive(this.adSlot, this.params.config.aspectRatio.default);
	}

	onVideoReady(video) {
		super.onVideoReady();

		video.addEventListener('wikiaAdCompleted', () => this.setResolvedState(video));
		video.addEventListener('wikiaFullscreenChange', () => {
			if (video.isFullscreen()) {
				this.container.classList.add('theme-video-fullscreen');
			} else {
				this.container.classList.remove('theme-video-fullscreen');
			}
		});
	}

	async setResolvedState(video) {
		const { config, image2 } = this.params;

		this.container.classList.add('theme-resolved');
		image2.element.classList.remove('hidden-state');
		await slotTweaker.makeResponsive(this.adSlot, config.aspectRatio.resolved);
		if (this.params.thumbnail) {
			this.setThumbnailStyle(video);
		}
	}

	setThumbnailStyle(video) {
		const thumbnail = this.params.thumbnail;
		const style = mapValues(this.params.config.state, styleProperty => `${styleProperty.resolved}%`);

		Object.assign(thumbnail.style, style);

		if (video) {
			Object.assign(video.container.style, style);
			window.requestAnimationFrame(() => {
				video.resize(thumbnail.offsetWidth, thumbnail.offsetHeight);
			});
		}
	}
}
