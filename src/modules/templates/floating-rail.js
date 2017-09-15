import { getTopOffset } from 'ad-engine/utils/dimensions';
import Context from 'ad-engine/services/context-service';
import ScrollListener from 'ad-engine/listeners/scroll-listener';

const adsInRail = 2,
	biggestAdSize = 600;

let availableSpace = null;

export default class FloatingRail {
	static getName() {
		return 'floatingRail';
	}

	static getDefaultConfig() {
		return {
			enabled: true,
			railSelector: '#rail',
			wrapperSelector: '#rail-wrapper',
			startOffset: 0
		};
	}

	constructor() {
		this.config = Context.get('templates.floatingRail');
		this.rail = document.querySelector(this.config.railSelector);
		this.railWrapper = document.querySelector(this.config.wrapperSelector);
	}

	static isEnabled() {
		return Context.get('templates.floatingRail.enabled') && Context.get('state.isMobile') === false;
	}

	init(params) {
		this.params = params;

		const offset = this.params.offset || 0;

		if (!this.railWrapper || !FloatingRail.isEnabled() || this.getAvailableSpace() === 0) {
			return;
		}

		const floatingSpace = Math.min(offset, this.getAvailableSpace());

		ScrollListener.addCallback(() => {
			const start = this.config.startOffset + getTopOffset(this.railWrapper),
				end = start + floatingSpace,
				scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

			if (scrollPosition <= start) {
				this.rail.style.paddingTop = '';
				this.rail.classList.add('rail-static');
				this.rail.classList.remove('rail-fixed');
			} else if (scrollPosition >= end) {
				this.rail.style.paddingTop = `${floatingSpace}px`;
				this.rail.classList.remove('rail-static');
				this.rail.classList.remove('rail-fixed');
			} else {
				this.rail.style.paddingTop = '';
				this.rail.classList.remove('rail-static');
				this.rail.classList.add('rail-fixed');
			}
		});
	}

	getAvailableSpace() {
		if (availableSpace === null) {
			const children = this.railWrapper.lastElementChild,
				childrenHeight = children.offsetTop + children.offsetHeight,
				space = this.railWrapper.offsetHeight;

			availableSpace = Math.max(0, space - childrenHeight - (adsInRail * biggestAdSize));
		}

		return availableSpace;
	}
}
