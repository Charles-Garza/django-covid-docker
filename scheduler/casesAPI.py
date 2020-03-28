import requests
from covid.models import allCases


def _get_cases_json():
    url = 'https://corona.lmao.ninja/all'

    r = requests.get(url)

    try:
        r.raise_for_status()
        return r.json()
    except:
        return None


def update_cases():
    json = _get_cases_json()
    if json is not None:
        try:
            new_case_data = allCases()

            # open weather map gives temps in Kelvin. We want celsius.
            print(json)

            #temp_in_celsius = json['main']['temp'] - 273.15
            #new_case_data.temperatue = temp_in_celsius
            #new_case_data.description = json['weather'][0]['description']
            #new_case_data.city = json['name']
            #new_case_data.save()
            #print("saving...\n" + new_case_data)
        except:
            pass