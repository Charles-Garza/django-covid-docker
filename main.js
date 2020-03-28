/**
 * Documentation for leaflet : https://leafletjs.com/reference-1.6.0.html
 * Maps available at : https://cloud.maptiler.com/maps/
 */
var map = L.map('map').setView([0, 0], 1);

var tileLayer = L.tileLayer('https://api.maptiler.com/maps/darkmatter/{z}/{x}/{y}.png?key=tUjSquWuD5GUID6GyhkL', {
    attribution: `<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a>
                  <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>`
});

const darkMap = new Map(map, tileLayer);
const marker1 = new Marker(29.41, -98.49, {color:'red'})

darkMap.addMarker(marker1);
//darkMap.removeMarker(marker1);
darkMap.findMarkerIndex(marker1);