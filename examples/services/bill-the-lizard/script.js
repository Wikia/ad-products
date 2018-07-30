import { context } from '@wikia/ad-engine';
import { billTheLizard } from '@wikia/ad-products';
import adContext from '../../context';

const predictionsElement = document.getElementById('predictions');
const serializedElement = document.getElementById('serialized');

context.extend(adContext);

billTheLizard.call()
	.then((predictions) => {
		predictionsElement.innerText = 'Model name\t\tPrediction\n';
		predictionsElement.innerText += Object.keys(predictions).map(key => `${key}\t\t${predictions[key]}\n`);
		serializedElement.innerText = billTheLizard.serialize();
	}, (response) => {
		predictionsElement.innerText = response.message;
		serializedElement.innerText = billTheLizard.serialize();
	});
