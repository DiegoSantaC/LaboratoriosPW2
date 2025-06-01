from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def home(request,*args, **kwargs) :
    print(args,kwargs)
    print(request.user)
    return render(request, 'home.html', { 'name':'Diego' })

def add(request) :
    val1=int(request.GET['num1'])
    val2=int(request.GET['num2'])
    reslt=val1+val2
    return render(request, 'result.html', { 'result':reslt })
    
