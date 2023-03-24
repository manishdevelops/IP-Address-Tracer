import 'core-js/stable';
import 'boxicons';
import 'regenerator-runtime/runtime';
import * as model from './model.js';
import traceView from './traceView.js';
import inputView from './traceView.js';
import mapView from './views/mapView.js';
const controlTracer = async function (ip) {
	try {
		traceView.renderSpinner();
		await model.loadData(ip);
		traceView.render(model.state);
		mapView.render(model.state);
		console.log(ip);
	} catch (err) {
		console.log(err);
		traceView.renderTimeoutError(err);
	}
};

const init = function () {
	// default
	controlTracer('');

	//search
	inputView.addHandlerInput(controlTracer);
};

init();
