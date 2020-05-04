class Map {
    constructor(map, tileLayer) {
        this.map = map;
        this.markers = [];
        tileLayer.addTo(this.map);
    }

    addMarker(marker) {
        this.markers.push(marker);
        marker.object.addTo(this.map);
    }

    removeMarker(marker) {
        var markerIndex = this.findMarkerIndex(marker.object);
        if (markerIndex != -1) {
            this.map.removeLayer(this.markers.object[markerIndex]);
            this.markers.splice[markerIndex, 1];
            console.log(`Marker removed at: ${marker.object['_latlng']}.`);
        } else {
            console.log(`No marker removed at: ${marker.object['_latlng']}.`);
        }
    }

    findMarkerIndex(marker) {
        for (var i = 0; i < this.markers.length; i++) {
            var tmpMarker = this.markers[i].object;
            if (marker.latitude === tmpMarker.latitude
                && marker.longitude === tmpMarker.longitude) {
                console.log(`Marker found at index: ${i}`);
                return i;
            }
        }
        console.log(`Marker at ${marker.object['_latlng']} not found.`);
        return -1;
    }

    updateMarkers() {
        this.map.markers = this.markers;
        this.map.on('zoomend', function(env) {
            var markers = env.target.markers;
            var mapZoom = env.target['_zoom'];
            for (var i = 0; i < markers.length; i++) {
                var sizeOfMarker = markers[i].cases;
                markers[i].object.setRadius(Math.pow(sizeOfMarker, 1/1.4));
            }
        });
    }
}

class Marker {
    constructor(latitude, longitude, aspect = {}, html, cases) {
        this.marker = L.circle([latitude, longitude], aspect);
        this.marker.bindPopup(html);
        this.numberOfCases = cases;
    }

    // Getters and Setters
    get object() {
        return this.marker;
    }

    get latitude() {
        return this.marker['_latlng']['lat'];
    }

    get longitude() {
        return this.marker['_latlng']['lng'];
    }

    get radius() {
        return this.marker['_mRadius'];
    }

    set radius(radius) {
        this.marker.radius = radius;
    }

    get cases() {
        return this.numberOfCases;
    }

    set cases(cases) {
        this.numberOfCases = cases;
    }
}
