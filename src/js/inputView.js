class InputView {
	_submitBtn = document.querySelector('.header__form');
	_inputIP = document.querySelector('#header__input');
	addHandlerInput(handler) {
		this._submitBtn.addEventListener('submit', (e) => {
			e.preventDefault();
			const ip = this._inputIP.value;
			if (!ip) return;
			console.log(ip);
		});
	}
}

export default new InputView();
