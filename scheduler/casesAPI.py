import requests
from covid.models import allCases, state, county


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
        except Exception as e:
            print(e)
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
            for item in json:
                new_state_case_data = state()
                new_state_case_data.state_name = item['state']
                new_state_case_data.cases = item['cases']
                new_state_case_data.today_cases = item['todayCases']
                new_state_case_data.deaths = item['deaths']
                new_state_case_data.today_deaths = item['todayDeaths']
                new_state_case_data.active = item['active']

                new_state_case_data.save()
        except:
            pass


def _get_all_county_cases_json():
    url = 'https://corona.lmao.ninja/jhucsse'

    r = requests.get(url)

    try:
        r.raise_for_status()
        return r.json()
    except:
        return None


def update_county_cases():
    json = _get_all_county_cases_json()
    if json is not None:

        try:
            for item in json:
                new_county_case_data = county()

                state_obj = state.objects.get(state_name=item['province'])
                new_county_case_data.state_name = state_obj

                new_county_case_data.county_name = item['city']

                new_county_case_data.updated = item['updatedAt']
                new_county_case_data.confirmed = item['stats']['confirmed']
                new_county_case_data.deaths = item['stats']['deaths']
                new_county_case_data.recovered = item['stats']['recovered']
                new_county_case_data.latitude = item['coordinates']['latitude']
                new_county_case_data.longitude = item['coordinates']['longitude']

                new_county_case_data.save()

        except:
            pass



def gather_all_info():
    update_cases()
    # update_state_cases()
    # update_county_cases()
