import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model.js';
import traceView from './traceView.js';
import inputView from './traceView.js';

const controlTracer = async function (ip) {
	await model.loadData(ip);
	traceView.render(model.state);
	console.log(ip);
};

const init = function () {
	inputView.addHandlerInput(controlTracer);
};

init();
