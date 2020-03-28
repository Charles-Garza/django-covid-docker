var map = L.map('map').setView([0, 0], 1);

var tileLayer = L.tileLayer('https://api.maptiler.com/maps/darkmatter/{z}/{x}/{y}.png?key=tUjSquWuD5GUID6GyhkL', {
    attribution: `<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a>
                  <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>`
}).addTo(map);


class Map {
    constructor(map, tileLayer) {
        this.map = map;
        this.tileLayer = tileLayer;
        this.markers = []
    }

    addMarker(latitude, longitude, aspect = {}) {
        var marker = L.circle([latitude, longitude], aspect).addTo(this.map);
        this.markers.push(marker);
    }

    removeMarker(latitude, longitude) {
        var markerIndex = this.findMarkerIndex(latitude, longitude);
        if (markerIndex != -1) {
            this.map.removeLayer(this.markers[markerIndex]);
            this.markers.splice[markerIndex, 1];
            console.log(`Marker removed at ${latitude, longitude}.`)
        } else {
            console.log(`No marker removed at ${latitude, longitude}.`)
        }
    }

    findMarkerIndex(latitude, longitude) {
        for (var i = 0; i < this.markers.length; i++) {
            var marker = this.markers[i];
            var lat = marker['_latlng']['lat'];
            var lng = marker['_latlng']['lng'];
            if (lat === latitude && longitude === lng) {
                console.log(`Marker found at index: ${i}`);
                return i;
            }
        }
        console.log(`Marker at ${latitude, longitude} not found.`);
        return -1;
    }
}

const darkMap = new Map(map, tileLayer);
darkMap.addMarker(29.41, -98.49);
darkMap.removeMarker(29.41, -98.49);
darkMap.findMarkerIndex(29.41, -98.45);
