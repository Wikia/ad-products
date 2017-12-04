import Context from 'ad-engine/src/services/context-service';
import ScrollListener from 'ad-engine/src/listeners/scroll-listener';
import SlotTweaker from 'ad-engine/src/services/slot-tweaker';
import defer from 'ad-engine/src/utils/defer';

import ResolvedState from './resolved-state';
import ToggleAnimation from './ui/toggle-animation';
import UniversalAdPackage from './universal-ad-package';
import VideoSettings from './video-settings';
import StickyBfaa from './sticky-bfaa';

export default class BigFancyAdAbove {
	static getName() {
		return 'bfaa';
	}

	static getDefaultConfig() {
		return {
			desktopNavbarWrapperSelector: '.wds-global-navigation-wrapper',
			handleNavbar: false,
			mobileNavbarWrapperSelector: '.global-navigation-mobile-wrapper',
			slotSibling: '.topic-header',
			slotsToEnable: [
				'BOTTOM_LEADERBOARD',
				'INCONTENT_BOXAD'
			],
			onStickBfaaCallback: (adSlot) => {
				const bfaa = adSlot.getElement();

				bfaa.classList.add('sticky-bfaa');

				setTimeout(() => {
					bfaa.style.top = 0;
				}, 0);
			},
			onUnstickBfaaCallback: (adSlot) => {
				// TODO uncomment me
				// const bfaa = adSlot.getElement(),
				// 	adHeight = bfaa.offsetHeight;
				//
				// bfaa.style.top = `${window.scrollY === 0 ? 0 : -adHeight}px`;
				// bfaa.style.transition = '';
				//
				// setTimeout(() => {
				// 	bfaa.style.top = 0;
				// 	bfaa.classList.remove('sticky-bfaa');
				// }, 1000);
			}
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

		if (this.params.isSticky) {
			this.stickyBfaa = new StickyBfaa(this.adSlot, this.config, this.params);
			this.stickyBfaa.run();
		}

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
	}

	updateOnScroll() {
		let offset = window.pageYOffset;
		this.updateSlotPadding(offset);
	}

	updateSlotPadding(offset) {
		let d = (400 - offset) / 400; // TODO use common logic with scrollToResolve
		let diff = (10 - 4) * d;
		var finalAspectRatio = 10 - diff;

		if (finalAspectRatio > 10) {
			finalAspectRatio = 10;
			this.params.image1.element.style.display = 'block';
			this.params.image2.element.style.display = 'none';

		} else if (finalAspectRatio < 4) {
			this.params.image1.element.style.display = 'none';
			this.params.image2.element.style.display = 'block';

			finalAspectRatio = 4;
		}

		SlotTweaker.makeResponsive(this.adSlot, finalAspectRatio);
		this.recalculatePaddingTop(finalAspectRatio);
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
			this.scrollToResolve(false);
			ScrollListener.addCallback(() => this.updateOnScroll());
		};
	}

	scrollToResolve(isMobile) {
		let globalConfig = {
			desktop: {
				aspectRatio: {
					default: 1600 / 400,
					resolved: 1600 / 160
				},
				state: {
					height: {
						default: 92,
						resolved: 100
					},
					top: {
						default: 4,
						resolved: 0
					}
				}
			},
			mobile: {
				aspectRatio: {
					default: 16 / 9,
					resolved: 3 / 1
				},
				state: {
					height: {
						default: 100,
						resolved: 65
					},
					right: {
						default: 0,
						resolved: 2.5
					},
					bottom: {
						default: 0,
						resolved: 7
					}
				}
			}
		};

		let config = globalConfig[isMobile ? 'mobile' : 'desktop'],
			container = this.params.adContainer,
			thumbnail = this.params.thumbnail;

		function onResize() {
			let currentAspectRatio = container.offsetWidth / container.offsetHeight,
				aspectRatioDiff = config.aspectRatio.default - config.aspectRatio.resolved,
				currentDiff = config.aspectRatio.default - currentAspectRatio,
				currentState = 1 - ((aspectRatioDiff - currentDiff) / aspectRatioDiff),
				diff;

			function handleProperty(name) {
				if (config.state[name]) {
					diff = config.state[name].default - config.state[name].resolved;
					thumbnail.style[name] = (config.state[name].default - (diff * currentState)) + '%';
				}
			}

			Object.keys(config.state).forEach(function (property) {
				handleProperty(property);
			});
		}

		window.addEventListener('scroll', onResize);
		onResize();
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
