import { createIcon, icons } from './icons';

const text = 'Learn more';

function add(video, container) {
	const learnMore = document.createElement('div'),
		icon = createIcon(icons.LEARN_MORE),
		label = document.createElement('span');

	icon.classList.add('learn-more-icon');
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
