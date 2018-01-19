import UiComponent from './ui-component';

const labelText = 'Advertisement';

export default class AdvertisementLabel extends UiComponent {
	render() {
		const label = document.createElement('div');

		label.innerText = labelText;
		label.className = 'advertisement-label';

		return label;
	}
}
