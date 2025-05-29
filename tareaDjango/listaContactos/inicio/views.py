from django.shortcuts import render
from django.http import HttpResponse


def myHomeView(*args,**kwargs):
    return HttpResponse("<h1>Hola mundo con django</h1>")

def anotherView(request):
    return HttpResponse("<h2>Solo otra pagina más</h2>")
