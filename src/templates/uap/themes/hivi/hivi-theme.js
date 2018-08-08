import AdvertisementLabel from '../../../interface/advertisement-label';
import { BigFancyAdTheme } from '../theme';
import CloseButton from '../../../interface/close-button';
import { Stickiness } from './stickiness';

export class BigFancyAdHiviTheme extends BigFancyAdTheme {
	static DEFAULT_UNSTICK_DELAY = 3000;

	onAdReady() {
		super.onAdReady();
		this.container.classList.add('theme-hivi');
		this.addAdvertisementLabel();
	}

	addAdvertisementLabel() {
		const advertisementLabel = new AdvertisementLabel();

		this.container.appendChild(advertisementLabel.render());
	}

	addUnstickButton() {
		const closeButton = new CloseButton({
			classNames: ['button-unstick'],
			onClick: () => {
				(this.stickiness || this.stickiness).close();
			}
		});

		this.container.appendChild(closeButton.render());
	}

	addUnstickEvents() {
		this.stickiness.on(Stickiness.STICKINESS_CHANGE_EVENT, isSticky => this.onStickinessChange(isSticky));
		this.stickiness.on(Stickiness.CLOSE_CLICKED_EVENT, this.onCloseClicked.bind(this));
		this.stickiness.on(Stickiness.UNSTICK_IMMEDIATELY_EVENT, this.unstickImmediately.bind(this));
	}
}
