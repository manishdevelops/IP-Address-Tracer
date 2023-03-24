class InputView {
	_data;
	_submitBtn = document.querySelector('.header__form');
	_inputIP = document.querySelector('#header__input');
	_parentElement = document.querySelector('.header__tracer-data');

	render(data) {
		this._data = data;
		console.log(this._data);
		const markup = this._generateMarkup(this._data);
		this._parentElement.insertAdjacentHTML('beforeend', markup);
		console.log(markup);
	}
	addHandlerInput(handler) {
		this._submitBtn.addEventListener('submit', (e) => {
			e.preventDefault();
			const ip = this._inputIP.value.trim();
			if (!ip) return;
			console.log(ip);
			handler(ip);
		});
	}

	_generateMarkup(data) {
		return `
		<div class="header__detail-container">
        <h2 class="header__tracer-title">IP Address</h2>
        <p class="header__tracer-content">${data.ipAddress}</p>
      </div>
      <div class="header__detail-container">
        <h2 class="header__tracer-title">Location</h2>
        <p class="header__tracer-content">${data.location.city}, ${data.location.country} ${data.location.postalCode}</p>
      </div>
      <div class="header__detail-container">
        <h2 class="header__tracer-title">Timezone</h2>
        <p class="header__tracer-content">UTC${data.location.timezone}</p>
      </div>

      <div class="header__detail-container">
        <h2 class="header__tracer-title">isp</h2>
        <p class="header__tracer-content">${data.isp}</p>
      </div>
		`;
	}
}

export default new InputView();
