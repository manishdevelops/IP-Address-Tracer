import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model.js';
import { API_KEY } from '/apikey.js';
import inputView from './inputView.js';
const controlTracer = async function () {};

const init = function () {
	inputView.addHandlerInput(controlTracer);
};

init();
