from django.shortcuts import render

# Create your views here.

def mainpage(request):
    return render(request, 'frontend/mainpage.html')