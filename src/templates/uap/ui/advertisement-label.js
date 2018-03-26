import UiComponent from './ui-component';
import { getTranslation } from '../../../common/i18n';

const labelText = getTranslation('labels', 'advertisement');

export default class AdvertisementLabel extends UiComponent {
	render() {
		const label = document.createElement('div');

		label.innerText = labelText;
		label.className = 'advertisement-label';

		return label;
	}
}
