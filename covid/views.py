from django.shortcuts import render
import requests
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse, HttpResponse
from .models import allCases

# Create your views here.
@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'all-cases': '/covid-cases/',
        'country': '/covid-cases/country/<str:pk>/',
        'state': '/covid-cases/state/<str:pk>/',
        'county': '/covid-cases/county/<str:pk>/',
    }

    return Response(api_urls)

@api_view(['GET'])
def allCases(request):
    cases = allCases.objects.all()
    print(cases)

    return Response(cases)