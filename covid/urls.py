from django.urls import path
from . import views

urlpatterns = [
    path('', views.apiOverview, name='api-overview'),
    path('api/', views.all_covid_cases, name='api-all-cases'),
    path('api/states', views.all_state_cases, name='api-all-state-cases'),
    path('api/state/<str:pk>', views.state_cases, name='api-single-state-cases'),
    path('api/state/<str:fk>/counties', views.county_cases, name='api-county-cases'),
    path('api/state/<str:fk>/county/<str:pk>', views.county_cases, name='api-county-cases'),
]