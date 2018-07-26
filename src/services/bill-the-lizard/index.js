import { context, utils } from '@wikia/ad-engine';

const logGroup = 'bill-the-lizard';

function buildUrl(host, endpoint, queryParameters = {}) {
	const params = [];

	Object.keys(queryParameters).forEach((key) => {
		params.push(`${key}=${queryParameters[key]}`);
	});

	return `//${host}/${endpoint}?${encodeURI(params.join('&'))}`;
}

function httpRequest(host, endpoint, queryParameters = {}, timeout = 0) {
	const request = new window.XMLHttpRequest();
	const url = buildUrl(host, endpoint, queryParameters);

	request.open('GET', url, true);
	request.responseType = 'json';
	request.timeout = timeout;

	utils.logger(logGroup, 'timeout configured to', request.timeout);

	return new Promise((resolve, reject) => {
		request.addEventListener('timeout', () => {
			request.abort();
			reject(new Error('Timeout reached'));
			utils.logger(logGroup, 'timed out');
		});
		request.onload = function () {
			if (this.status === 200) {
				utils.logger(logGroup, 'has response');
				resolve(this.response);
			} else {
				utils.logger(logGroup, 'error occurred');
				reject(new Error(this.response ? this.response.message : 'Error'));
			}
		};
		request.send();
	});
}

function getQueryParameters(models, parameters) {
	const now = new Date();
	const day = now.getDay() - 1;

	return Object.assign({}, {
		models,
		h: now.getHours(),
		dow: day === -1 ? 6 : day
	}, parameters);
}

class BillTheLizard {
	constructor() {
		this.predictions = {};
	}

	call() {
		if (!context.get('services.billTheLizard.enabled')) {
			utils.logger(logGroup, 'disabled');
			return new Promise((resolve, reject) => reject(new Error('Disabled')));
		}

		const host = context.get('services.billTheLizard.host');
		const endpoint = context.get('services.billTheLizard.endpoint');
		const models = context.get('services.billTheLizard.models');
		const parameters = context.get('services.billTheLizard.parameters');
		const timeout = context.get('services.billTheLizard.timeout');

		if (models.length < 1) {
			utils.logger(logGroup, 'no models to predict');
			return new Promise((resolve, reject) => reject(new Error('Missing models')));
		}

		const queryParameters = getQueryParameters(models, parameters);
		utils.logger(logGroup, 'calling service', host, queryParameters);

		return httpRequest(host, endpoint, queryParameters, timeout)
			.then(response => this.parsePredictions(response));
	}

	parsePredictions(response) {
		this.predictions = {};
		Object.keys(response).forEach((key) => {
			const { result, version } = response[key];
			const suffix = key.indexOf('version') > 0 ? '' : `:${version}`;

			if (typeof result !== 'undefined') {
				this.predictions[`${key}${suffix}`] = result;
			}
		});

		utils.logger(logGroup, 'predictions', this.predictions);

		return this.predictions;
	}

	getPrediction(modelName) {
		return this.predictions[modelName];
	}

	getPredictions() {
		return this.predictions;
	}

	serialize() {
		return Object.keys(this.predictions).map(key => `${key}=${this.predictions[key]}`).join(';');
	}
}

export const billTheLizard = new BillTheLizard();
