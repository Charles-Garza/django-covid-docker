/* Global Variables */
const apiRoot = 'http://localhost:8000/api/';

const markerAspect = {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.7,
    radius: 7500,
};

/**
 * Documentation for leaflet : https://leafletjs.com/reference-1.6.0.html
 * Maps available at : https://cloud.maptiler.com/maps/
 */
const map = L.map('map', {
    worldCopyJump: true,
    minZoom: 3,
    maxZoom: 10,
    zoom: 5,
    center: [29.44928723, -98.52019748],
});

const tileLayer = L.tileLayer('https://api.maptiler.com/maps/darkmatter/{z}/{x}/{y}.png?key=tUjSquWuD5GUID6GyhkL', {
    attribution: `<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a>
                  <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>`
});

/* Example call for Texas' counties. */
function loadTexasMarkers() {
    var darkMap = new Map(map, tileLayer);
    var url = apiRoot + 'state/Texas/counties'
    fetch(url)
    .then((response) => response.json())
    .then(function(data) {
        console.log('Texas Data:', data);
        for (county of data) {
            var latitude = county['latitude'];
            var longitude = county['longitude'];
            var countyName = county['county_name'];
            var confirmed = county['confirmed'];
            var deaths = county['deaths'];
            var markerPopupHTML = `<h3 class="popup-title white-text">${countyName}</h3>
                <p class="popup-inf white-text">Confirmed: <b class="red-text">${confirmed} </b> </p>
                <p class="popup-inf white-text">Deaths: ${deaths}</p>
            `

            var marker = new Marker(latitude, longitude, markerAspect, markerPopupHTML);
            darkMap.addMarker(marker);
        }
    });
}

if (window.addEventListener) {
    window.addEventListener('load', loadTexasMarkers, false);
} else if (window.attachEvent) { 
    window.attachEvent('load', loadTexasMarkers);
} else {
    document.addEventListener('load', loadTexasMarkers, false);
}