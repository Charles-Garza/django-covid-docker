function getDeathsPerCountries() {
    var url = apiRoot + 'countries';
    var table = document.getElementById("countries-deaths-table")

    fetch(url)
        .then((response) => response.json())
        .then(function (data) {
            console.log('Get Countries Data:', data)

            var header = `<thead>
            <tr>
                <th>Total Deaths per Country</th>
            </tr>
    
            </thead>
            <tbody class="scrollContent"`
            table.insertAdjacentHTML('beforeend', header);

            for (country of data)
            {
                // var latitude = country['latitude'];
                // var longitude = country['longitude'];
                var countryName = country['country_name'];

                // var cases = country['cases'];
                // var active = country['active'];
                // var critical = country['critical'];
                var deaths = country['deaths'];
                // var recovered = country['recovered'];

                var column = `<tr>
                   <td> ${deaths} deaths </td>
                   <td> ${countryName} </td>
                </tr>`

                table.insertAdjacentHTML('beforeend', column);
            }
            var tableEnd = `</tbody>`
            table.insertAdjacentHTML('beforeend', tableEnd)
        })
}

if (window.addEventListener) {
    window.addEventListener('load', getDeathsPerCountries, false);
} else if (window.attachEvent) {
    window.attachEvent('load', getDeathsPerCountries);
} else {
    document.addEventListener('load', getDeathsPerCountries, false);
}