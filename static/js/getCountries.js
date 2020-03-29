function getCountries() {
    var url = apiRoot + 'countries';
    var table = document.getElementById("countries-table")

    fetch(url)
        .then((response) => response.json())
        .then(function (data) {
            console.log('Get Countries Data:', data)

            var header = `<thead>
            <tr>
                <th>Countries</th>
                <th>Number Of Cases</th>
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
                // var deaths = country['deaths'];
                // var recovered = country['recovered'];

                var column = `<tr>
                   <td> ${countryName} </td>
                   <td> ${cases} </td>
                </tr>`

                table.insertAdjacentHTML('beforeend', column);
            }
            var tableEnd = `</tbody>`
            table.insertAdjacentHTML('beforeend', tableEnd)
        })
}

if (window.addEventListener) {
    //window.addEventListener('load', loadTexasMarkers, false);
    window.addEventListener('load', getCountries, false);
} else if (window.attachEvent) {
    //window.attachEvent('load', loadTexasMarkers);
    window.attachEvent('load', getCountries);
}