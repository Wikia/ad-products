import Context from 'ad-engine/src/services/context-service';
import ScrollListener from 'ad-engine/src/listeners/scroll-listener';
import SlotTweaker from 'ad-engine/src/services/slot-tweaker';
import { debounce } from 'lodash';

import AdvertisementLabel from '../../ui/advertisement-label';
import CloseButton from '../../ui/close-button';
import { BigFancyAdTheme } from '../theme';
import StickyBfaa from './sticky-bfaa';

const HIVI_RESOLVED_THRESHOLD = 0.995;

export class BfaaTheme extends BigFancyAdTheme {
	constructor(adSlot, params) {
		super(adSlot, params);

		this.stickyBfaa = null;
		this.scrollListener = null;
		this.video = null;
		this.config = Context.get('templates.bfaa');
		this.isLocked = false;
		this.desktopNavbarWrapper = null;
		this.mobileNavbarWrapper = null;
		this.onResolvedStateScroll = null;
		this.addAdvertisementLabel();

		if (this.params.isSticky) {
			this.stickyBfaa = new StickyBfaa(this.adSlot);
			this.addUnstickButton();
			this.stickyBfaa.on(StickyBfaa.STICKINESS_CHANGE_EVENT, isSticky => this.onStickinessChange(isSticky));
			this.stickyBfaa.run();
		}
	}

	addAdvertisementLabel() {
		const advertisementLabel = new AdvertisementLabel();

		this.container.appendChild(advertisementLabel.render());
	}

	addUnstickButton() {
		const closeButton = new CloseButton({
			classNames: ['button-unstick'],
			onClick: () => this.stickyBfaa.revertStickiness()
		});

		this.container.appendChild(closeButton.render());
	}

	onAdReady() {
		this.scrollListener = ScrollListener.addCallback(() => this.updateOnScroll());
		this.desktopNavbarWrapper = document.querySelector(this.config.desktopNavbarWrapperSelector);
		this.mobileNavbarWrapper = document.querySelector(this.config.mobileNavbarWrapperSelector);
		// Manually run update on scroll once
		this.updateOnScroll();
	}

	onVideoReady(video) {
		this.video = video;
		video.addEventListener('wikiaAdStarted', () => this.updateOnScroll());
		video.addEventListener('wikiaAdCompleted', () => this.setResolvedState());
	}

	onStickinessChange(isSticky) {
		const stickinessCallback = isSticky ? this.config.onStickBfaaCallback : this.config.onUnstickBfaaCallback;
		stickinessCallback(this.adSlot);

		if (!isSticky) {
			this.moveNavbar(0);
		}
	}

	moveNavbar(value) {
		const styleTop = value ? `${value - 1}px` : '';

		if (this.desktopNavbarWrapper) {
			this.desktopNavbarWrapper.style.top = styleTop;
		}

		if (this.mobileNavbarWrapper) {
			this.mobileNavbarWrapper.style.top = styleTop;
		}
	}

	updateOnScroll() {
		const config = this.params.config,
			currentWidth = document.body.offsetWidth,
			isResolved = this.container.classList.contains('theme-resolved'),
			maxHeight = currentWidth / config.aspectRatio.default,
			minHeight = currentWidth / config.aspectRatio.resolved,
			aspectScroll = this.isLocked ? minHeight : Math.max(minHeight, maxHeight - window.scrollY),
			currentAspectRatio = currentWidth / aspectScroll,
			aspectRatioDiff = config.aspectRatio.default - config.aspectRatio.resolved,
			currentDiff = config.aspectRatio.default - currentAspectRatio,
			currentState = 1 - ((aspectRatioDiff - currentDiff) / aspectRatioDiff);

		const diff = config.state.height.default - config.state.height.resolved;
		const value = (config.state.height.default - (diff * currentState)) / 100;

		Object.keys(config.state).forEach((property) => {
			if (config.state[property]) {
				this.handleProperty(config, currentState, property);
			}
		});

		this.adjustVideoSize(aspectScroll * value);

		if (currentState >= HIVI_RESOLVED_THRESHOLD && !isResolved) {
			this.setResolvedState();
		} else if (currentState < HIVI_RESOLVED_THRESHOLD && isResolved) {
			this.container.style.top = '';
			this.switchImagesInAd(false);
		}

		SlotTweaker.makeResponsive(this.adSlot, currentAspectRatio);
	}

	adjustVideoSize(value) {
		if (this.video && !this.video.isFullscreen()) {
			this.video.container.style.width = `${this.params.videoAspectRatio * value}px`;
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

	setResolvedState() {
		const isSticky = this.stickyBfaa && this.stickyBfaa.isSticky();
		const width = this.container.offsetWidth;
		const aspectRatio = this.params.config.aspectRatio;
		const resolvedHeight = width / aspectRatio.resolved;
		const offset = Math.round(width / aspectRatio.default - resolvedHeight);

		if (this.onResolvedStateScroll) {
			window.removeEventListener('scroll', this.onResolvedStateScroll);
			this.onResolvedStateScroll.cancel();
		}

		this.onResolvedStateScroll = debounce(() => {
			if (window.scrollY < offset) {
				return;
			}

			this.isLocked = true;
			ScrollListener.removeCallback(this.scrollListener);
			window.removeEventListener('scroll', this.onResolvedStateScroll);
			this.onResolvedStateScroll = null;
			this.adjustBodySize(aspectRatio.resolved);
			window.scrollBy(0, -offset);
		}, 50);

		window.addEventListener('scroll', this.onResolvedStateScroll);
		this.switchImagesInAd(true);
		this.onResolvedStateScroll();

		if (isSticky) {
			this.moveNavbar(resolvedHeight);
		} else {
			this.container.style.top = `${offset}px`;
		}
	}

	adjustBodySize(aspectRatio) {
		this.container.style.top = '';
		document.body.style.paddingTop = `${100 / aspectRatio}%`;
		SlotTweaker.makeResponsive(this.adSlot, aspectRatio);
	}

	handleProperty(config, currentState, name) {
		if (config.state[name]) {
			const diff = config.state[name].default - config.state[name].resolved;
			const value = `${(config.state[name].default - (diff * currentState))}%`;
			this.params.thumbnail.style[name] = value;

			if (this.video) {
				this.video.container.style[name] = value;
			}
		}
	}

}

export class BfabTheme extends BigFancyAdTheme {
	constructor(adSlot, params) {
		super(adSlot, params);

		this.addAdvertisementLabel();
	}

	addAdvertisementLabel() {
		const advertisementLabel = new AdvertisementLabel();

		this.container.appendChild(advertisementLabel.render());
	}

	onAdReady() {
		SlotTweaker.makeResponsive(this.adSlot, this.params.config.aspectRatio.default);
	}

	onVideoReady(video) {
		video.addEventListener('wikiaAdCompleted', () => this.setResolvedState(video));
	}

	setResolvedState(video) {
		const { thumbnail, config, image2 } = this.params;

		this.container.classList.add('theme-resolved');
		image2.element.classList.remove('hidden-state');
		SlotTweaker.makeResponsive(this.adSlot, config.aspectRatio.resolved).then(() => {
			video.resize(thumbnail.offsetWidth, thumbnail.offsetHeight);
		});
	}
}
