import { utils } from '@wikia/ad-engine';

const logGroup = 'executor';

export class Executor {
	constructor() {
		this.methods = {};
	}

	register(name, callback) {
		utils.logger(logGroup, `method ${name} registered`);
		this.methods[name] = callback;
	}

	execute(methodName, model, prediction) {
		const callback = this.methods[methodName];

		if (typeof callback !== 'function') {
			throw Error(`${methodName} is not executable`);
		}

		utils.logger(logGroup, `executing ${methodName} method`, model.name, prediction);
		callback(model, prediction);
	}

	executeActions(models, response) {
		Object.keys(response).forEach((modelName) => {
			const { result } = response[modelName];

			const executableModel = models.find(model => model.name === modelName && model.executable);
			if (!executableModel) {
				return;
			}

			const actions = executableModel[`on_${result}`];
			if (!actions) {
				return;
			}

			actions.forEach(methodName => this.execute(methodName, executableModel, result));
		});
	}
}
