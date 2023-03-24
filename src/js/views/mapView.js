// import L from 'leaflet';

class MapView {
	_data;
	_map;
	parentElement = document.querySelector('#map');

	render(data) {
		this._data = data;
		console.log(this._data.location.coords);
		this._clear();
		this.renderMap(this._data.location.coords);
	}

	_clear() {
		this._map && this._map.remove();
	}

	renderMap(coords) {
		console.log(coords);
		this._map = L.map('map').setView(coords, 13);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 19,
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		}).addTo(this._map);

		L.marker(coords).addTo(this._map).openPopup();
	}
}

export default new MapView();
