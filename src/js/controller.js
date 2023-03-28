import 'core-js/stable';
import 'boxicons';
import 'regenerator-runtime/runtime';
import * as model from './model.js';
import traceView from './views/traceView.js';
import inputView from './views/traceView.js';
import mapView from './views/mapView.js';

const controlTracer = async function (ip) {
	try {
		// 1)render spinner before rendering data
		traceView.renderSpinner();

		// 2)load data for searched ip
		await model.loadData(ip);

		// 3)render location data
		traceView.render(model.state);

		// 4)render map
		const { map_url, attribution } = model.mapUrls();
		mapView.renderMap(model.state.location.coords, map_url, attribution);
	} catch (err) {
		console.log(err);
		traceView.renderError(err);
	}
};

const init = function () {
	// 1) Default
	controlTracer('');

	// 2) handle ip
	inputView.addHandlerInput(controlTracer);
};

init();
