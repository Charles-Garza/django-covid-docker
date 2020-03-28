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
        'All': '/covid-cases/',
        'Country': '/covid-cases/country/<str:pk>/',
        'State': '/covid-cases/state/<str:pk>/',
        'County': '/covid-cases/county/<str:pk>/',
    }

    return Response(api_urls)

@api_view(['GET'])
def allCases(request):
    allCasesUrl = "https://corona.lmao.ninja/all"

    cases = allCases.objects.all()
    return Response(cases)