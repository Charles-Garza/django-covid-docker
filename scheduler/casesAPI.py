import requests
from covid.models import allCases


def _get_all_cases_json():
    url = 'https://corona.lmao.ninja/all'

    r = requests.get(url)

    try:
        r.raise_for_status()
        return r.json()
    except:
        return None


def update_cases():
    json = _get_all_cases_json()
    if json is not None:
        try:
            new_case_data = allCases()

            # open the json data of covid-19 cases
            print(json)

            new_case_data.cases = json['cases']
            new_case_data.deaths = json['deaths']
            new_case_data.recovered = json['recovered']
            new_case_data.updated = json['updated']
            new_case_data.active = json['active']

            new_case_data.save()

            print("saving data...\n")
        except Exception as e:
            pass


def gather_all_info():
    update_cases()