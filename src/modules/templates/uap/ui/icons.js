import svgs from './icons.json';

const parser = new window.DOMParser();

export function createIcon(iconName, classNames = []) {
	if (svgs[iconName]) {
		const element = parser.parseFromString(svgs[iconName], 'image/svg+xml').documentElement;

		classNames.forEach(className => element.classList.add(className));

		return element;
	}

	return null;
}

export const icons = Object.keys(svgs).reduce((map, name) => {
	map[name] = name;
	return map;
}, {});
