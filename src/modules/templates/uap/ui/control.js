export default class Control {
	get classNames() {
		return this.props.classNames || [];
	}

	constructor(props = {}) {
		this.props = props;
	}

	render() {
		const element = document.createElement('span');

		element.classList.add(...this.classNames);

		return element;
	}
}
