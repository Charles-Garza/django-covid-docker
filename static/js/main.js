/* Global Variables */
const apiRoot = 'http://localhost:8000/api/';

/**
 * Documentation for leaflet : https://leafletjs.com/reference-1.6.0.html
 * Maps available at : https://cloud.maptiler.com/maps/
 */
const map = L.map('map', {
    worldCopyJump: true,
    minZoom: 3,
    maxZoom: 8,
    zoom: 5,
    center: [29.44928723, -98.52019748],
});

const tileLayer = L.tileLayer('https://api.maptiler.com/maps/darkmatter/{z}/{x}/{y}.png?key=tUjSquWuD5GUID6GyhkL', {
    attribution: `<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a>
                  <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>`
});

const darkMap = new Map(map, tileLayer);

function loadCountyMarkers() {
    var url = apiRoot + 'counties/all';
    fetch(url)
    .then((response) => response.json())
    .then(function(data) {
        console.log('State Counties Data:', data);
        for (county of data) {
            var latitude = county['latitude'];
            var longitude = county['longitude'];
            var countyName = county['county_name'];
            var confirmed = county['confirmed'];
            var recovered = county['recovered'];
            var deaths = county['deaths'];
            var markerPopupHTML = `<h3 class="popup-title white-text">${countyName}</h3>
                <p class="popup-inf white-text">Confirmed: <b class="red-text">${confirmed} </b> </p>
                <p class="popup-inf white-text">Recovered: <b class="green-text">${recovered} </b></p>
                <p class="popup-inf white-text">Deaths: ${deaths}</p>
            `

            var markerAspect = {
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.5,
                radius: (7 * confirmed) * (1/2),
            };

            var marker = new Marker(latitude, longitude, markerAspect, markerPopupHTML, confirmed);
            darkMap.addMarker(marker);
        }
    });
}

function loadCountryMarkers() {
    var url = apiRoot + 'countries';
    fetch(url)
    .then((response) => response.json())
    .then(function(data) {
        console.log('Countries Data:', data);
        for (country of data) {
            var latitude = country['latitude'];
            var longitude = country['longitude'];
            var countryName = country['country_name'];
            var cases = country['cases'];
            var active = country['active'];
            var critical = country['critical'];
            var deaths = country['deaths'];
            var recovered = country['recovered'];

            var markerPopupHTML = `<h3 class="popup-title white-text">${countryName}</h3>
                <p class="popup-inf white-text">Cases: ${cases} </p>
                <p class="popup-inf white-text">Active: ${active} </p>
                <p class="popup-inf white-text">Critical: <b class="red-text">${critical} </b> </p>
                <p class="popup-inf white-text">Recovered: <b class="green-text">${recovered} </b> </p>
                <p class="popup-inf white-text">Deaths: ${deaths}</p>
            `

            var markerAspect = {
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.5,
                radius: (7 * cases) * (1/2),
            };

            var marker = new Marker(latitude, longitude, markerAspect, markerPopupHTML, cases);
            darkMap.addMarker(marker);
        }
    });

}

if (window.addEventListener) {
    window.addEventListener('load', loadCountyMarkers, false);
    window.addEventListener('load', loadCountryMarkers, false);
} else if (window.attachEvent) { 
    window.attachEvent('load', loadCountyMarkers);
    window.attachEvent('load', loadCountryMarkers);
} else {
    document.addEventListener('load', loadCountyMarkers, false);
    document.addEventListener('load', loadCountryMarkers, false);
}