import Context from 'ad-engine/src/services/context-service';
import ScrollListener from 'ad-engine/src/listeners/scroll-listener';
import SlotTweaker from 'ad-engine/src/services/slot-tweaker';
import { SLOT_VIEWED_EVENT } from 'ad-engine/src/models/ad-slot';
import { logger } from 'ad-engine/src/utils/logger';

import AdvertisementLabel from '../ui/advertisement-label';
import CloseButton from '../ui/close-button';
import { BfaaTheme } from './theme';

const HIVI_RESOLVED_THRESHOLD = 0.995;

class StickyBfaa {
	constructor(adSlot, config) {
		this.adSlot = adSlot;
		this.config = config;
		this.onViewed = this.onViewed.bind(this);
		this.viewabilityApproveTimeout = null;
		this.isSticky = false;
		this.logger = (...args) => logger(StickyBfaa.LOG_GROUP, ...args);
	}

	run() {
		SlotTweaker.onReady(this.adSlot).then(() => {
			if (document.hidden) {
				window.addEventListener('visibilitychange', () => this.onAdReady(), { once: true });
			} else {
				this.onAdReady();
			}
		});
	}

	applyStickiness() {
		if (!this.isSticky) {
			this.logger('Applying bfaa stickiness');
			this.isSticky = true;
			this.config.onStickBfaaCallback(this.adSlot);
		} else {
			this.logger('bfaa stickiness is already applied');
		}
	}

	revertStickiness() {
		if (this.isSticky) {
			this.logger('Reverting bfaa stickiness');
			this.isSticky = false;
			this.config.onUnstickBfaaCallback(this.adSlot);
		} else {
			this.logger('bfaa stickiness is already reverted');
		}
	}

	onViewed() {
		let revertTimeout = null;
		const adContainer = this.adSlot.getElement();
		const shouldRevertImmediately = Math.abs(window.scrollY - adContainer.offsetTop) < (adContainer.offsetHeight / 2);
		const onRevertTimeout = () => {
			clearTimeout(revertTimeout);
			document.removeEventListener('scroll', onRevertTimeout);
			this.revertStickiness();
		};

		this.adSlot.removeListener(SLOT_VIEWED_EVENT, this.onViewed);
		clearTimeout(this.viewabilityApproveTimeout);
		document.addEventListener('scroll', onRevertTimeout);
		revertTimeout = setTimeout(onRevertTimeout, (shouldRevertImmediately ? 0 : StickyBfaa.STICKINESS_REMOVAL_WINDOW));

		this.logger(`slotViewed triggered on ${this.adSlot.getSlotName()}`);
	}

	onAdReady() {
		this.viewabilityApproveTimeout = setTimeout(this.onViewed, StickyBfaa.VIEWABILITY_APPROVAL_WINDOW);
		this.applyStickiness();
		this.adSlot.once(SLOT_VIEWED_EVENT, this.onViewed);
	}
}

Object.assign(StickyBfaa, {
	// time after which we'll remove stickiness even with no user interaction
	STICKINESS_REMOVAL_WINDOW: 10000,
	// time after which we'll unstick slot on user scroll even if it's not viewed
	VIEWABILITY_APPROVAL_WINDOW: 5000,
	LOG_GROUP: 'sticky-bfaa'
});

export class HiViBfaa extends BfaaTheme {
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

	adIsReady() {
		ScrollListener.addCallback(() => this.updateOnScroll());
		// Manually run update on scroll once
		this.updateOnScroll();
	}

	videoIsReady(video) {
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
