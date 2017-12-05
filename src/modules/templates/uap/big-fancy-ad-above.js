import Context from 'ad-engine/src/services/context-service';
import ScrollListener from 'ad-engine/src/listeners/scroll-listener';
import SlotTweaker from 'ad-engine/src/services/slot-tweaker';
import defer from 'ad-engine/src/utils/defer';

import ResolvedState from './resolved-state';
import ToggleAnimation from './ui/video/toggle-animation';
import AdvertisementLabel from './ui/advertisement-label';
import CloseButton from './ui/close-button';
import UniversalAdPackage from './universal-ad-package';
import VideoSettings from './video-settings';
import StickyBfaa from './sticky-bfaa';

const hiviResolvedThreshold = 0.995;

export default class BigFancyAdAbove {
	static getName() {
		return 'bfaa';
	}

	static getDefaultConfig() {
		const calculateStickyTopPosition = adHeight => `${(window.scrollY <= adHeight) ? -window.scrollY : -adHeight}px`;

		function onStickBfaaCallback(adSlot) {
			const bfaa = adSlot.getElement();
			const adHeight = bfaa.offsetHeight;

			bfaa.classList.add('sticky-bfaa');
			bfaa.style.top = calculateStickyTopPosition(adHeight);

			setTimeout(() => {
				bfaa.style.transition = `top ${this.stickyAnimationDuration / 1000}s ease`;
				bfaa.style.top = 0;
			}, 0);
		}

		function onUnstickBfaaCallback(adSlot) {
			// const bfaa = adSlot.getElement();
			// const adHeight = bfaa.offsetHeight;
			
			// let animationFrameId = null;
			// const setTopPosition = () => {
			// 	bfaa.style.top = calculateStickyTopPosition(adHeight);
			// 	animationFrameId = window.requestAnimationFrame(setTopPosition);
			// };
			
			// animationFrameId = window.requestAnimationFrame(setTopPosition);
			
			// setTimeout(() => {
			// 	window.cancelAnimationFrame(animationFrameId);
			// 	bfaa.style.top = '';
			// 	bfaa.style.transition = '';
			// 	bfaa.classList.remove('sticky-bfaa');
			// }, this.stickyAnimationDuration);
		}

		return {
			desktopNavbarWrapperSelector: '.wds-global-navigation-wrapper',
			handleNavbar: false,
			mobileNavbarWrapperSelector: '.global-navigation-mobile-wrapper',
			slotSibling: '.topic-header',
			slotsToEnable: [
				'BOTTOM_LEADERBOARD',
				'INCONTENT_BOXAD'
			],
			stickyAnimationDuration: 500,
			onStickBfaaCallback,
			onUnstickBfaaCallback
		};
	}

	/**
	 * Constructor
	 *
	 * @param {object} adSlot
	 */
	constructor(adSlot) {
		this.adSlot = adSlot;
		this.config = Context.get('templates.bfaa');
		this.container = document.getElementById(this.adSlot.getId());
		this.videoSettings = null;
		this.stickyBfaa = null;
	}

	/**
	 * Initializes the BFAA unit
	 */
	init(params) {
		this.params = params;

		if (!this.container) {
			return;
		}

		UniversalAdPackage.init(this.params, this.config.slotsToEnable);
		this.videoSettings = new VideoSettings(this.params);
		this.container.style.backgroundColor = this.getBackgroundColor();
		this.container.classList.add('bfaa-template');

		if (params.template === 'hivi') {
			SlotTweaker.onReady(this.adSlot)
				.then(this.adIsReady.bind(this));
		} else {
			ResolvedState.setImage(this.videoSettings)
				.then(() => SlotTweaker.makeResponsive(this.adSlot, this.params.aspectRatio))
				.then(this.adIsReady.bind(this));
		}

		if (this.params.isSticky) {
			this.stickyBfaa = new StickyBfaa(this.adSlot, this.config);

			const closeButton = new CloseButton({
				classNames: ['button-unstick'],
				onClick: () => this.stickyBfaa.revertStickiness()
			});

			this.container.appendChild(closeButton.render());
			this.stickyBfaa.run();
		}

		if (this.params.theme === 'hivi') {
			const advertisementLabel = new AdvertisementLabel();

			this.container.appendChild(advertisementLabel.render());
		}
	}

	updateOnScroll() {
		const config = this.params.config,
			currentWidth = document.body.offsetWidth,
			isResolved = !this.params.image2.element.classList.contains('hidden-state'),
			maxHeight = currentWidth / config.aspectRatio.default,
			minHeight = currentWidth / config.aspectRatio.resolved,
			aspectScroll = Math.max(minHeight, maxHeight - window.scrollY),
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

		if (!this.videoPlayer) {
			this.videoPlayer = this.adSlot.getElement().querySelector('.video-player');
		}

		if (this.videoPlayer) {
			this.videoPlayer.style.width = this.params.videoAspectRatio * (aspectScroll * value) + 'px';
		}

		if (currentState >= hiviResolvedThreshold && !isResolved) {
			this.container.classList.add('theme-resolved');
			this.params.image2.element.classList.remove('hidden-state');
		} else if (currentState < hiviResolvedThreshold && isResolved) {
			this.container.classList.remove('theme-resolved');
			this.params.image2.element.classList.add('hidden-state');
		}

		SlotTweaker.makeResponsive(this.adSlot, currentAspectRatio);
		this.recalculatePaddingTop(currentAspectRatio);
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

	setupNavbar() {
		const desktopNavbarWrapper = document.querySelector(this.config.desktopNavbarWrapperSelector);
		const mobileNavbarWrapper = document.querySelector(this.config.mobileNavbarWrapperSelector);
		const slotParent = this.container.parentNode;
		const sibling = document.querySelector(this.config.slotSibling) || this.container.nextElementSibling;

		if (mobileNavbarWrapper) {
			slotParent.insertBefore(mobileNavbarWrapper, sibling);
		}

		if (desktopNavbarWrapper) {
			slotParent.insertBefore(desktopNavbarWrapper, sibling);
		}
	}

	getBackgroundColor() {
		const color = `#${this.params.backgroundColor.replace('#', '')}`;

		return this.params.backgroundColor ? color : '#000';
	}

	adIsReady(iframe) {
		document.body.style.paddingTop = iframe.parentElement.style.paddingBottom;
		document.body.classList.add('has-bfaa');

		if (this.config.handleNavbar) {
			this.setupNavbar();
		}

		if (UniversalAdPackage.isVideoEnabled(this.params)) {
			defer(UniversalAdPackage.loadVideoAd, this.videoSettings) // defers for proper rendering
				.then((video) => {
					if (!this.params.splitLayoutVideoPosition) {
						video.addEventListener('wikiaAdStarted', () => {
							this.recalculatePaddingTop(this.params.videoAspectRatio);
						});

						video.addEventListener('wikiaAdCompleted', () => {
							this.recalculatePaddingTop(this.params.aspectRatio);
						});
					}

					return video;
				});
		}

		if (this.params.theme === 'hivi') {
			ScrollListener.addCallback(() => this.updateOnScroll());
			// Manually run update on scroll once
			this.updateOnScroll();
		}
	}

	recalculatePaddingTop(finalAspectRatio) {
		document.body.style.paddingTop = `${100 / finalAspectRatio}%`;

		this.container.style.height = `${this.container.offsetHeight}px`;
		// get offsetWidth from existing DOM element in order to force repaint
		this.container.style.height = `${this.container.offsetWidth / finalAspectRatio}px`;

		setTimeout(() => {
			// clear height so ad is responsive again
			this.container.style.height = '';
		}, ToggleAnimation.duration);
	}
}
