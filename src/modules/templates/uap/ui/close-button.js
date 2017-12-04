import Button from './button';
import { icons, createIcon } from './icons';

export default class CloseButton extends Button {
	get classNames() {
		return ['button-close', ...super.classNames];
	}

	render() {
		const button = super.render();
		const closeIcon = createIcon(icons.CROSS, ['icon']);

		button.appendChild(closeIcon);

		return button;
	}
}
