/* Global Variables */
const apiRoot = window.location.href + 'api/';


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
                radius: Math.pow(confirmed, 1/1.4),
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
                radius: Math.pow(cases, 1/1.4),
            };

            var marker = new Marker(latitude, longitude, markerAspect, markerPopupHTML, cases);
            darkMap.addMarker(marker);
        }
    });

}
darkMap.updateMarkers();

// Load Table data below

function getTotalCases() {
    var url = apiRoot + 'cases';
    var cases = document.getElementById("total-cases");

    fetch(url)
        .then((response) => response.json())
        .then(function (tcase) {
            console.log('Get Total Cases Data:', tcase)
            
            
            var totalCase = tcase['cases'];
            var totalRecovered = tcase['recovered'];
            var totalDeath = tcase['deaths'];
            var totalActive = tcase['active'];

            var totalResult = `
                <h2 id="total" class="red-text">
                    Total Cases: ${totalCase}
                </h2>
                <h2 id="total" class="green-text">
                    Total Recovered: ${totalRecovered}
                </h2>
                <h2 id="total" class="gray-text">
                    Total Active: ${totalActive}
                </h2>
                <h2 id="total" class="gray-text">
                    Total Deaths: ${totalDeath}
                </h2>
                `
                cases.insertAdjacentHTML('beforeend', totalResult);   
    
        });
}

function getCountries() {
    var url = apiRoot + 'countries';
    var table = document.getElementById("country-table")

    fetch(url)
        .then((response) => response.json())
        .then(function (data) {
            console.log('Get Countries Data:', data)

            var header = `
            <div class="table-title">
                <h2 class="max-width">Country</h2>
                <h2 class="max-width">Cases</h2>
                <h2 class="max-width">Recovered</h2>
                <h2 class="max-width">Deaths</h2>
            </div>
            <hr class="t-hline"/>
            `
            table.insertAdjacentHTML('beforeend', header);

            for (country of data) {
                var countryName = country['country_name'];
                var cases = country['cases'];
                var deaths = country['deaths'];
                var recovered = country['recovered'];

                var column = `
                <div class="table-row">
                    <h2 class="max-width">${countryName}</h2>
                    <h2 class="max-width red-text">${cases}</h2>
                    <h2 class="max-width green-text">${recovered}</h2>
                    <h2 class="max-width gray-text">${deaths}</h2>
                </div>
                <hr class="hline"/>
                `

                table.insertAdjacentHTML('beforeend', column);
            }
        })
}

if (window.addEventListener) {
    window.addEventListener('load', loadCountyMarkers, false);
    window.addEventListener('load', loadCountryMarkers, false);
    window.addEventListener('load', getCountries, false);
    window.addEventListener('load', getTotalCases, false);
} else if (window.attachEvent) { 
    window.attachEvent('load', loadCountyMarkers);
    window.attachEvent('load', loadCountryMarkers);
    window.attachEvent('load', getCountries);
    window.attachEvent('load', getTotalCases);
} else {
    document.addEventListener('load', loadCountyMarkers, false);
    document.addEventListener('load', loadCountryMarkers, false);
    document.addEventListener('load', getCountries, false);
    document.addEventListener('load', getTotalCases, false);
}