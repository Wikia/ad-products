import Context from 'ad-engine/src/services/context-service';
import ScrollListener from 'ad-engine/src/listeners/scroll-listener';
import SlotTweaker from 'ad-engine/src/services/slot-tweaker';

import AdvertisementLabel from '../../ui/advertisement-label';
import CloseButton from '../../ui/close-button';
import { BigFancyAdTheme } from '../theme';
import StickyBfaa from './sticky-bfaa';

const HIVI_RESOLVED_THRESHOLD = 0.995;

export class BfaaTheme extends BigFancyAdTheme {
	constructor(adSlot, params) {
		super(adSlot, params);

		this.stickyBfaa = null;
		this.video = null;
		this.config = Context.get('templates.bfaa');
		this.isLocked = false;
		this.addAdvertisementLabel();

		if (this.params.isSticky) {
			this.stickyBfaa = new StickyBfaa(this.adSlot, this.config);
			this.addUnstickButton();
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
		this.listener = ScrollListener.addCallback(() => this.updateOnScroll());
		// Manually run update on scroll once
		this.updateOnScroll();
	}

	onVideoReady(video) {
		this.video = video;
		video.addEventListener('wikiaAdStarted', () => this.updateOnScroll());
		video.addEventListener('wikiaAdCompleted', () => this.setResolvedState());
	}

	updateOnScroll() {
		const adElement = this.container,
			config = this.params.config,
			currentWidth = document.body.offsetWidth,
			isResolved = adElement.classList.contains('theme-resolved'),
			isSticky = this.stickyBfaa.isSticky(),
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
			this.setResolvedState(isSticky);
		} else if (currentState < HIVI_RESOLVED_THRESHOLD && isResolved) {
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

	setResolvedState(isSticky) {
		this.switchImagesInAd(true);
		this.adjustBodySize(this.params.config.aspectRatio.resolved);
		ScrollListener.removeCallback(this.listener);
		this.isLocked = true;

		if (!isSticky) {
			window.scrollTo(0, 0);
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
