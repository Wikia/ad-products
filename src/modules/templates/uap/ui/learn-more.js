import { createIcon, icons } from './icons';

const text = 'Learn More';

function add(video, container) {
	const learnMore = document.createElement('div'),
		icon = createIcon(icons.LEARN_MORE, ['learn-more-icon', 'porvata-icon']),
		label = document.createElement('div');

	label.innerText = text;
	learnMore.appendChild(label);
	learnMore.appendChild(icon);

	learnMore.classList.add('learn-more');
	learnMore.addEventListener('click', () => {
		// TODO: give me click through url
		top.open('http://fandom.com', '_blank');
	});

	container.appendChild(learnMore);
}

export default {
	add
};
