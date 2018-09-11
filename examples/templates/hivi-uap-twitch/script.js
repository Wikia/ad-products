import { AdEngine, templateService, TwitchPlayer } from '@wikia/ad-engine';
import { BigFancyAdTwitch } from '@wikia/ad-products';

import customContext from '../../context';
import '../../styles.scss';

customContext.targeting.artid = '415';

templateService.register(BigFancyAdTwitch);


// ===== UAP Twitch experiments =====
const identifier = 'UAPTwitchTest';
const options = {
	width: 266,
	height: 150,
	channel: 'valkia',
};
const player = new TwitchPlayer(identifier, options);
player.setVolume(0.75);


new AdEngine(customContext).init();
