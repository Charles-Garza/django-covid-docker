from django.urls import path
from . import views

urlpatterns = [
    path('', views.apiOverview, name='api-overview'),
    path('covid-cases/', views.allCases, name='api-all-cases'),
]