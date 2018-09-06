import { context, utils } from '@wikia/ad-engine';
import { isProperGeo } from '../../utils';

const logGroup = 'project-handler';

/**
 * Bill the Lizard projects handler
 */
export class ProjectsHandler {
	constructor() {
		this.projects = {};
	}

	/**
	 * Enables project by name
	 * @param {string} name
	 */
	enable(name) {
		utils.logger(logGroup, `project ${name} enabled`);
		this.projects[name] = true;
	}

	/**
	 * Checks whether project is enabled
	 * @param {string} name
	 * @returns {boolean}
	 */
	isEnabled(name) {
		return !!this.projects[name];
	}

	/**
	 * Returns all geo-enabled models' definitions based on enabled projects
	 * @returns {ModelDefinition[]}
	 */
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
