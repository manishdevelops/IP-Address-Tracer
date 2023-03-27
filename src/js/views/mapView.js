import markerIcon from '/src/assets/images/icon-location.svg';
class MapView {
	parentElement = document.querySelector('#map');
	map;

	/**
	 * render the map to the DOM
	 * @param {Array<latitude, longitude>} coords
	 * @param {string} map_url - map url of leaflet
	 * @param {string} attribution  - map attribution url
	 * @this {object} instance of MapView
	 * @repuires /src/assets/images/icon-location.svg
	 * @public
	 * @author Manish Mandal
	 */
	renderMap(coords, map_url, attribution) {
		this.map && this.map.remove();
		this.map = L.map('map').setView(coords, 13);

		L.tileLayer(map_url, {
			maxZoom: 19,
			attribution: `&copy; <a href="${attribution}">OpenStreetMap</a> contributors`,
		}).addTo(this.map);

		const myIcon = L.icon({
			iconUrl: markerIcon,
			iconSize: [38, 50],
		});

		L.marker(coords, { icon: myIcon }).addTo(this.map);
	}

	/**
	 * Clears map container before map renders
	 * @this {Object}  An instance of MapView
	 * @public
	 */
	clear() {
		this.parentElement.innerHTML = '';
	}
}

export default new MapView();
