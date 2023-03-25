import 'core-js/stable';
import 'boxicons';
import 'regenerator-runtime/runtime';
import * as model from './model.js';
import traceView from './views/traceView.js';
import inputView from './views/traceView.js';
import mapView from './views/mapView.js';
const controlTracer = async function (ip) {
	try {
		traceView.renderSpinner();
		await model.loadData(ip);
		traceView.render(model.state);
		mapView.render(model.state);
	} catch (err) {
		console.log(err);
		traceView.renderError(err);
	}
};

const init = function () {
	// default
	controlTracer('');

	//search ip
	inputView.addHandlerInput(controlTracer);
};

init();
