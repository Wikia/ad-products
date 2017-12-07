export class BfaaTheme {
	constructor(adSlot, params) {
		this.adSlot = adSlot;
		this.container = this.adSlot.getElement();
		this.params = params;
	}

	adIsReady() {}

	videoIsReady() {}
}
