import { createIcon, icons } from '../icons';
import { getTranslation } from '../../../../common/i18n';

const text = getTranslation('labels', 'learn-more');

function add(video, container, params) {
	const learnMore = document.createElement('div'),
		icon = createIcon(icons.LEARN_MORE, ['learn-more-icon', 'porvata-icon']),
		label = document.createElement('div');

	label.innerText = text;
	learnMore.appendChild(label);
	learnMore.appendChild(icon);

	learnMore.classList.add('learn-more');
	learnMore.addEventListener('click', () => {
		top.open(params.clickThroughURL, '_blank');
	});

	container.appendChild(learnMore);
}

export default {
	add
};
