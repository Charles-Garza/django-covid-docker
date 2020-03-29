import requests
from covid.models import allCases, state


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
            new_case_data.cases = json['cases']
            new_case_data.deaths = json['deaths']
            new_case_data.recovered = json['recovered']
            new_case_data.updated = json['updated']
            new_case_data.active = json['active']

            new_case_data.save()

            print("saving data...\n")
        except:
            pass


def _get_all_state_cases_json():
    url = 'https://corona.lmao.ninja/states'

    r = requests.get(url)

    try:
        r.raise_for_status()
        return r.json()
    except:
        return None


def update_state_cases():
    json = _get_all_state_cases_json()
    if json is not None:
        try:
            print(json)

            for item in json:
                print(item)
                new_state_case_data = state()
                new_state_case_data.state_name = item['state']
                new_state_case_data.cases = item['cases']
                new_state_case_data.today_cases = item['todayCases']
                new_state_case_data.deaths = item['deaths']
                new_state_case_data.today_deaths = item['todayDeaths']
                new_state_case_data.active = item['active']

                new_state_case_data.save()

                print("saving data...\n")
        except Exception as e:
            pass




def gather_all_info():
    # update_cases()
    update_state_cases()