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
		this.videoCompleted = false;
		this.config = Context.get('templates.bfaa');
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
		ScrollListener.addCallback(() => this.updateOnScroll());
		// Manually run update on scroll once
		this.updateOnScroll();
	}

	onVideoReady(video) {
		this.video = video;
		video.addEventListener('wikiaAdStarted', () => this.updateOnScroll());
		video.addEventListener('wikiaAdCompleted', () => {
			this.videoCompleted = true;
			this.updateOnScroll();
		});
	}

	updateOnScroll() {
		const adElement = this.container,
			config = this.params.config,
			currentWidth = document.body.offsetWidth,
			isResolved = adElement.classList.contains('theme-resolved'),
			isSticky = this.stickyBfaa.isSticky(),
			maxHeight = currentWidth / config.aspectRatio.default,
			minHeight = currentWidth / config.aspectRatio.resolved,
			aspectScroll = this.videoCompleted ? minHeight : Math.max(minHeight, maxHeight - window.scrollY),
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

		if (this.video && !this.video.isFullscreen()) {
			this.video.container.style.width = `${this.params.videoAspectRatio * (aspectScroll * value)}px`;
		}

		if (currentState >= HIVI_RESOLVED_THRESHOLD && !isResolved || this.videoCompleted) {
			this.container.classList.add('theme-resolved');
			this.params.image2.element.classList.remove('hidden-state');

			if (!isSticky) {
				adElement.style.top = `${maxHeight - minHeight}px`;
			}
		} else if (currentState < HIVI_RESOLVED_THRESHOLD && isResolved) {
			this.container.classList.remove('theme-resolved');
			this.params.image2.element.classList.add('hidden-state');
			adElement.style.top = '';
		}

		SlotTweaker.makeResponsive(this.adSlot, currentAspectRatio);
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
		video.addEventListener('wikiaAdCompleted', () => this.resolve());
	}

	resolve() {
		this.params.image2.element.classList.remove('hidden-state');
		SlotTweaker.makeResponsive(this.adSlot, this.params.config.aspectRatio.resolved);
	}
}
