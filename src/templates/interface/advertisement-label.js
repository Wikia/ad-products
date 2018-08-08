import UiComponent from './ui-component';
import { getTranslation } from '../../common/i18n';

export default class AdvertisementLabel extends UiComponent {
	render() {
		const label = document.createElement('div');

		label.innerText = getTranslation('labels', 'advertisement');
		label.className = 'advertisement-label';

		return label;
	}
}
