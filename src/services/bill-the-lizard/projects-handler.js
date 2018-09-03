import { context, utils } from '@wikia/ad-engine';
import { isProperGeo } from '../../utils';

const logGroup = 'project-handler';

export class ProjectsHandler {
	constructor() {
		this.list = {};
	}

	enable(name) {
		utils.logger(logGroup, `project ${name} enabled`);
		this.list[name] = true;
	}

	isEnabled(name) {
		return !!this.list[name];
	}

	getEnabledModels() {
		const projects = context.get('services.billTheLizard.projects');
		const enabledProjectNames = Object.keys(projects).filter(name => this.isEnabled(name));
		const models = [];

		enabledProjectNames.forEach((name) => {
			// Only first enabled model in project is executable
			let isNextModelExecutable = true;

			projects[name].forEach((model) => {
				if (isProperGeo(model.countries, model.name)) {
					model.executable = isNextModelExecutable;
					isNextModelExecutable = false;
					models.push(model);
				} else {
					model.executable = false;
				}
			});
		});

		return models;
	}
}
