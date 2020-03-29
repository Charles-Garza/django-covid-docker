function getCountries() {
    var url = apiRoot + 'countries';
    var table = document.getElementById("countries-table")

    fetch(url)
        .then((response) => response.json())
        .then(function (data) {
            console.log('Get Countries Data:', data)

            var header = `<thead>
            <tr>
                <td class="white-text centered">Countries</td>
                <td class="white-text centered">Number Of Cases</td>
                <td class="white-text centered">Total Deaths per Country</td>
            </tr>
    
            </thead>
            <tbody class="scrollContent"`
            table.insertAdjacentHTML('beforeend', header);

            for (country of data)
            {
                // var latitude = country['latitude'];
                // var longitude = country['longitude'];
                var countryName = country['country_name'];

                var cases = country['cases'];
                // var active = country['active'];
                // var critical = country['critical'];
                var deaths = country['deaths'];
                // var recovered = country['recovered'];

                var column = `<tr>
                   <td class="white-text centered"> ${countryName} </td>
                   <td class="white-text centered"> ${cases} </td>
                   <td class="white-text centered"> ${deaths} </td>
                </tr>`

                table.insertAdjacentHTML('beforeend', column);
            }
            var tableEnd = `</tbody>`
            table.insertAdjacentHTML('beforeend', tableEnd)
        })
}

if (window.addEventListener) {
    window.addEventListener('load', getCountries, false);
} else if (window.attachEvent) {
    window.attachEvent('load', getCountries);
} else {
    document.addEventListener('load', getCountries, false);
}