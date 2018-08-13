import { get, set } from 'lodash';
import * as utils from './utils';
import './styles/styles.scss';

const versionField = 'ads.adProductsVersion';

if (get(window, versionField, null)) {
	window.console.warn('Multiple <?= PACKAGE(name) ?> initializations. This may cause issues.');
}

set(window, versionField, 'v<?= PACKAGE(version) ?>');

export * from './common';
export * from './services';
export * from './templates';
export { utils };
