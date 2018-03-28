/* eslint-disable no-console, import/no-extraneous-dependencies, import/no-unresolved */
const { IncomingWebhook } = require('@slack/client');
const version = require('../package.json').version;
const previousVersion = require('./previous-package.json').version;

const webhookUrl = process.env.SLACK_INCOMING_WEBHOOK;
const repositoryName = 'ad-products';

if (!webhookUrl) {
	console.warn('Missing slack incoming webhook url. Message will not be sent.');
	return;
}

if (!version) {
	console.warn('Missing version tag. Message will not be sent.');
	return;
}

const releaseLink = `<https://github.com/Wikia/${repositoryName}/releases/tag/v${version}|Release v${version}>`;
let diffLink = '';

if (previousVersion) {
	diffLink = `(<https://github.com/Wikia/${repositoryName}/compare/v${previousVersion}...v${version}|show diff>)`;
}

const webhook = new IncomingWebhook(webhookUrl);
const message = `New version of *${repositoryName}* has been released: ${releaseLink} ${diffLink}`;

webhook.send(message, (error, response) => {
	if (error) {
		console.error(error);
	} else {
		console.log('Message successfully sent.', response);
	}
});
