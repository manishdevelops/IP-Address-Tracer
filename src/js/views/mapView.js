class MapView {
	_data;
	parentElement = document.querySelector('#map');

	render(data) {
		this._data = data;
		console.log(this._data.location.coords);
		this.renderMap(this._data.location.coords);
	}

	clear() {
		this.parentElement.innerHTML = '';
	}

	renderMap(coords) {
		this.map && this.map.remove();

		console.log(coords);
		this.map = L.map('map').setView(coords, 13);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 19,
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		}).addTo(this.map);

		L.marker(coords).addTo(this.map).openPopup();
	}
}

export default new MapView();
