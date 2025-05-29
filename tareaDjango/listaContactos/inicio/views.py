from django.shortcuts import render
from django.http import HttpResponse


def myHomeView(request,*args,**kwargs):
    print(args,kwargs)
    print(request.user)
    return HttpResponse("<h1>Hola mundo con django</h1>")

def anotherView(request):
    return HttpResponse("<h2>Solo otra pagina más</h2>")
