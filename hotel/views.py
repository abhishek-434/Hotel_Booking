from django.shortcuts import render

def home(request):
    return render(request, 'hotel/index.html')

def login_view(request):
    return render(request, 'hotel/login.html')

def signup_view(request):
    return render(request, 'hotel/signup.html')
