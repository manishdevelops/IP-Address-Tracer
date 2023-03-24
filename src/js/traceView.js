class InputView {
	_data;
	_submitBtn = document.querySelector('.header__form');
	_inputIP = document.querySelector('#header__input');
	_parentElement = document.querySelector('.header__tracer-data');

	render(data) {
		this._data = data;
		console.log(this._data);
		const markup = this._generateMarkup(this._data);
		this._clear();
		this._parentElement.insertAdjacentHTML('beforeend', markup);
	}
	addHandlerInput(handler) {
		this._submitBtn.addEventListener('submit', (e) => {
			e.preventDefault();
			const ip = this._inputIP.value.trim();
			if (!ip) return;
			handler(ip);
		});
	}

	_clear() {
		this._parentElement.innerHTML = '';
	}

	renderTimeoutError(err) {
		const markup = `
				<div class="header__tracer-error">
					<box-icon class="header__tracer-errorIcon" name='error' animation='flashing' ></box-icon>
					<p class="errorMessage">${err}</p>
				</div>
		`;
		this._clear();
		this._parentElement.insertAdjacentHTML('beforeend', markup);
	}

	renderSpinner() {
		const markup = `
		<div class="header__loader-container">
		<box-icon class="header__tracer-loader" name='loader'  animation='spin' flip='horizontal' ></box-icon>
	   	</div>
		`;
		this._clear();
		this._parentElement.insertAdjacentHTML('beforeend', markup);
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
