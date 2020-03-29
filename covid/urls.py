from django.urls import path
from . import views

urlpatterns = [
    path('', views.apiOverview, name='api-overview'),
    path('cases', views.all_covid_cases, name='api-all-cases'),
    path('country/<str:pk>', views.single_country_cases, name='api-single-countries-cases'),
    path('countries/', views.all_country_cases, name='api-all-country-cases'),
    path('states', views.all_state_cases, name='api-all-state-cases'),
    path('state/<str:pk>', views.state_cases, name='api-single-state-cases'),
    path('state/<str:fk>/counties', views.every_county_case, name='api-every-county-cases'),
    path('state/<str:fk>/county/<str:pk>', views.state_county_cases, name='api-state-county-cases'),
]