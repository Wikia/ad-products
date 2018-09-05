import { context, utils } from '@wikia/ad-engine';
import { Executor } from './executor';
import { ProjectsHandler } from './projects-handler';

/**
 * @typedef {Object} ModelDefinition
 * @property {boolean|undefined} executable
 * @property {string[]} countries
 * @property {string} name
 * @property {function} on_*
 */

const logGroup = 'bill-the-lizard';

/**
 * Builds endpoint url
 * @param {string} host
 * @param {string} endpoint
 * @param {Object} queryParameters (key-value pairs for query parameters)
 * @returns {string}
 */
function buildUrl(host, endpoint, queryParameters = {}) {
	const params = [];

	Object.keys(queryParameters).forEach((key) => {
		params.push(`${key}=${queryParameters[key]}`);
	});

	return `${host}/${endpoint}?${encodeURI(params.join('&'))}`;
}

/**
 * Requests service
 * @param {string} host
 * @param {string} endpoint
 * @param {Object} queryParameters (key-value pairs for query parameters)
 * @param {number} timeout
 * @returns {Promise}
 */
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

/**
 * Builds key-value pairs for query parameters
 * @param {ModelDefinition[]} models
 * @param {Object} parameters (key-value pairs)
 * @returns {Object}
 */
function getQueryParameters(models, parameters) {
	const now = new Date();
	const day = now.getDay() - 1;

	return Object.assign({}, {
		models: models.map(model => model.name),
		h: now.getHours(),
		dow: day === -1 ? 6 : day
	}, parameters);
}

/**
 * Overrides predictions based on response
 * @param {Object} response
 * @returns {Object}
 */
function overridePredictions(response) {
	Object.keys(response).forEach((name) => {
		const newValue = utils.queryString.get(`bill.${name}`);

		if (newValue) {
			response[name].result = parseInt(newValue, 10);
		}
	});

	return response;
}

/**
 * Bill the Lizard service handler
 */
class BillTheLizard {
	constructor() {
		this.executor = new Executor();
		this.projectsHandler = new ProjectsHandler();
		this.predictions = {};
	}

	/**
	 * Requests service, executes defined methods and parses response
	 * @returns {Promise}
	 */
	call() {
		if (!context.get('services.billTheLizard.enabled')) {
			utils.logger(logGroup, 'disabled');
			return new Promise((resolve, reject) => reject(new Error('Disabled')));
		}

		const host = context.get('services.billTheLizard.host');
		const endpoint = context.get('services.billTheLizard.endpoint');
		const parameters = context.get('services.billTheLizard.parameters');
		const timeout = context.get('services.billTheLizard.timeout');
		const models = this.projectsHandler.getEnabledModels();

		if (!models || models.length < 1) {
			utils.logger(logGroup, 'no models to predict');
			return new Promise((resolve, reject) => reject(new Error('Missing models')));
		}

		const queryParameters = getQueryParameters(models, parameters);
		utils.logger(logGroup, 'calling service', host, endpoint, queryParameters);

		return httpRequest(host, endpoint, queryParameters, timeout)
			.then(response => overridePredictions(response))
			.then((response) => {
				const predictions = this.parsePredictions(models, response);

				this.executor.executeMethods(models, response);

				return predictions;
			});
	}

	/**
	 * Parses predictions based on response
	 * @param {ModelDefinition[]} models
	 * @param {Object} response
	 * @returns {Object}
	 */
	parsePredictions(models, response) {
		const targeting = [];
		this.predictions = {};

		Object.keys(response).forEach((key) => {
			const model = models.find(definition => definition.name === key);
			const { result, version } = response[key];
			const suffix = key.indexOf(version) > 0 ? '' : `:${version}`;

			if (typeof result !== 'undefined') {
				this.predictions[`${key}${suffix}`] = result;

				if (model && model.dfpTargeting) {
					targeting.push(`${key}${suffix}_${result}`);
				}
			}
		});

		if (targeting.length > 0) {
			context.set('targeting.btl', targeting);
		}

		utils.logger(logGroup, 'predictions', this.predictions);

		return this.predictions;
	}

	/**
	 * Returns prediction for given model name
	 * @param {string} modelName
	 * @returns {number|undefined}
	 */
	getPrediction(modelName) {
		return this.predictions[modelName];
	}

	/**
	 * Returns all (parsed) predictions
	 * @returns {Object}
	 */
	getPredictions() {
		return this.predictions;
	}

	/**
	 * Serializes all predictions
	 * @returns {string}
	 */
	serialize() {
		return Object.keys(this.predictions).map(key => `${key}=${this.predictions[key]}`).join(';');
	}
}

export const billTheLizard = new BillTheLizard();
