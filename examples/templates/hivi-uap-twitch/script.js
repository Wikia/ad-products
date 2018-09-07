import { AdEngine, templateService, TwitchPlayer } from '@wikia/ad-engine';
import { BigFancyAdAbove } from '@wikia/ad-products';

import customContext from '../../context';
import '../../styles.scss';

customContext.targeting.artid = '390';

templateService.register(BigFancyAdAbove);

new AdEngine(customContext).init();

// UAP Twitch experiments
const identifier = 'UAPTwitchTest';
const options = {
	width: 854,
	height: 480,
	channel: 'dallas',
};
const player = new TwitchPlayer(identifier, options);
