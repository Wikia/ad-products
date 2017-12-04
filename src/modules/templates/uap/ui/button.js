import Control from './control';

export default class Button extends Control {
	get classNames() {
		return ['button-control', ...super.classNames];
	}

	render() {
		const button = document.createElement('button');

		button.classList.add('button-control', ...this.classNames);
		button.addEventListener('click', event => this.onClick(event));

		return button;
	}

	onClick(event) {
		const { onClick } = this.props;

		if (typeof onClick === 'function') {
			return onClick(event);
		}

		return null;
	}
}
