from django.urls import path
from . import views

urlpatterns = [
    path('', views.apiOverview, name='api-overview'),
    path('covid-cases/', views.all_covid_cases, name='api-all-cases'),
    path('covid-cases/states', views.all_state_cases, name='api-all-state-cases'),
    path('covid-cases/state/<str:pk>', views.state_cases, name='api-single-state-cases'),
]