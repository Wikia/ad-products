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
		this.config = Context.get('templates.bfaa');

		const advertisementLabel = new AdvertisementLabel();
		this.container.appendChild(advertisementLabel.render());

		if (this.params.isSticky) {
			this.stickyBfaa = new StickyBfaa(this.adSlot, this.config);

			const closeButton = new CloseButton({
				classNames: ['button-unstick'],
				onClick: () => this.stickyBfaa.revertStickiness()
			});

			this.container.appendChild(closeButton.render());
			this.stickyBfaa.run();
		}
	}

	onAdReady() {
		ScrollListener.addCallback(() => this.updateOnScroll());
		// Manually run update on scroll once
		this.updateOnScroll();
	}

	onVideoReady(video) {
		video.addEventListener('wikiaAdStarted', () => this.updateOnScroll());
	}

	updateOnScroll() {
		const adElement = this.container,
			config = this.params.config,
			currentWidth = document.body.offsetWidth,
			isResolved = !this.params.image2.element.classList.contains('hidden-state'),
			isSticky = adElement.classList.contains('sticky-bfaa'),
			maxHeight = currentWidth / config.aspectRatio.default,
			minHeight = currentWidth / config.aspectRatio.resolved,
			aspectScroll = Math.max(minHeight, maxHeight - window.scrollY),
			currentAspectRatio = currentWidth / aspectScroll,
			aspectRatioDiff = config.aspectRatio.default - config.aspectRatio.resolved,
			currentDiff = config.aspectRatio.default - currentAspectRatio,
			currentState = 1 - ((aspectRatioDiff - currentDiff) / aspectRatioDiff);

		const diff = config.state.height.default - config.state.height.resolved;
		const value = (config.state.height.default - (diff * currentState)) / 100;

		if (!this.videoPlayer) {
			this.videoPlayer = adElement.querySelector('.video-player');
		}

		Object.keys(config.state).forEach((property) => {
			if (config.state[property]) {
				this.handleProperty(config, currentState, property);
			}
		});

		if (this.videoPlayer) {
			this.videoPlayer.style.width = `${this.params.videoAspectRatio * (aspectScroll * value)}px`;
		}

		if (currentState >= HIVI_RESOLVED_THRESHOLD && !isResolved) {
			this.container.classList.add('theme-resolved');
			this.params.image2.element.classList.remove('hidden-state');
		} else if (currentState < HIVI_RESOLVED_THRESHOLD && isResolved) {
			this.container.classList.remove('theme-resolved');
			this.params.image2.element.classList.add('hidden-state');
		}

		SlotTweaker.makeResponsive(this.adSlot, currentAspectRatio);
		if (!isSticky) {
			this.adSlot.getElement().style.top = `${maxHeight - aspectScroll}px`;
		}
	}

	handleProperty(config, currentState, name) {
		if (config.state[name]) {
			const diff = config.state[name].default - config.state[name].resolved;
			const value = `${(config.state[name].default - (diff * currentState))}%`;
			this.params.thumbnail.style[name] = value;

			if (this.videoPlayer) {
				this.videoPlayer.style[name] = value;
			}
		}
	}

}

export class BfabTheme extends BigFancyAdTheme {
	constructor(adSlot, params) {
		super(adSlot, params);

		const advertisementLabel = new AdvertisementLabel();
		this.container.appendChild(advertisementLabel.render());
	}
}
