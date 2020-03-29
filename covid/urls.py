from django.urls import path
from . import views

urlpatterns = [
    path('', views.apiOverview, name='api-overview'),
    path('cases', views.all_covid_cases, name='api-all-cases'),
    path('states', views.all_state_cases, name='api-all-state-cases'),
    path('state/<str:pk>', views.state_cases, name='api-single-state-cases'),
    path('state/<str:fk>/counties', views.county_cases, name='api-county-cases'),
    path('state/<str:fk>/county/<str:pk>', views.county_cases, name='api-county-cases'),
]