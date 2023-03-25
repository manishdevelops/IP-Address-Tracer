import markerIcon from '/src/assets/images/icon-location.svg';
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

		this.map = L.map('map').setView(coords, 13);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 19,
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		}).addTo(this.map);

		const myIcon = L.icon({
			iconUrl: markerIcon,
			iconSize: [38, 50],
		});

		L.marker(coords, { icon: myIcon }).addTo(this.map);
	}
}

export default new MapView();
