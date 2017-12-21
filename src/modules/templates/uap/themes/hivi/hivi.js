import Context from 'ad-engine/src/services/context-service';
import ScrollListener from 'ad-engine/src/listeners/scroll-listener';
import SlotTweaker from 'ad-engine/src/services/slot-tweaker';
import { debounce, forEach, mapValues } from 'lodash';

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
		this.scrollListener = ScrollListener.addCallback(() => this.updateOnScroll());
		// Manually run update on scroll once
		this.updateOnScroll();
	}

	onVideoReady(video) {
		this.video = video;
		video.addEventListener('wikiaAdStarted', () => this.updateOnScroll());
		video.addEventListener('wikiaAdCompleted', () => {
			if (!this.isLocked) {
				this.setResolvedState();
			}
		});
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

		this.adjustVideoSize(aspectScroll * value);
		this.setThumbnailStyle(currentState);

		if (currentState >= HIVI_RESOLVED_THRESHOLD && !isResolved) {
			this.setResolvedState();
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

	setResolvedState() {
		const isSticky = this.container.classList.contains('sticky-bfaa');
		const width = this.container.offsetWidth;
		const aspectRatio = this.params.config.aspectRatio;
		const offset = Math.round(width / aspectRatio.default - width / aspectRatio.resolved);
		const onScroll = debounce(() => {
			window.removeEventListener('scroll', onScroll);
			this.updateOnScroll();
			this.adjustBodySize(aspectRatio.resolved);
			window.scrollBy(0, -offset);
		}, 50);

		ScrollListener.removeCallback(this.scrollListener);
		this.isLocked = true;
		window.addEventListener('scroll', onScroll);
		this.switchImagesInAd(true);
		onScroll();

		if (!isSticky) {
			this.container.style.top = `${offset}px`;
		}
	}

	adjustBodySize(aspectRatio) {
		this.container.style.top = '';
		document.body.style.paddingTop = `${100 / aspectRatio}%`;
		SlotTweaker.makeResponsive(this.adSlot, aspectRatio);
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
		const { config, image2 } = this.params;

		this.container.classList.add('theme-resolved');
		image2.element.classList.remove('hidden-state');
		SlotTweaker.makeResponsive(this.adSlot, config.aspectRatio.resolved).then(() => {
			this.setThumbnailStyle(video);
		});
	}

	setThumbnailStyle(video) {
        const thumbnail = this.params.thumbnail;
		forEach(this.params.config.state, (value, styleProperty) => {
			thumbnail.style[styleProperty] = `${value.resolved}%`;

            if (video) {
                video.container.style[styleProperty] = `${value.resolved}%`;
            }
		});

		if (video) {
            window.requestAnimationFrame(() => {
			    video.resize(thumbnail.offsetWidth, thumbnail.offsetHeight);
            });
		}
	}
}
