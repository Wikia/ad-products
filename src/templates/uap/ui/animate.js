import { utils } from '@wikia/ad-engine';

export async function animate(adSlot, className, duration) {
	const container = adSlot.getElement();
	const durationPropertyName = `--${className}-duration`;

	container.style.setProperty(durationPropertyName, `${duration}ms`);
	container.classList.add(className);
	await utils.wait(duration);
	container.classList.remove(className);
	container.style.removeProperty(durationPropertyName);
}
