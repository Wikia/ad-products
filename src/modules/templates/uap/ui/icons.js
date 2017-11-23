import svgs from './icons.json';

const parser = new window.DOMParser();

export function createIcon(iconName) {
	if (svgs[iconName]) {
		return parser.parseFromString(svgs[iconName], 'image/svg+xml').documentElement;
	}

	return null;
}

export const icons = Object.keys(svgs).reduce((map, name) => {
	map[name] = name;
	return map;
}, {});
