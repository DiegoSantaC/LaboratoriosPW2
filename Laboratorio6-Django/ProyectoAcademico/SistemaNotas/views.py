from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def miHomeView(*args, **kwargs) :
    return HttpResponse('<h1> Bienvenido a mi Gestor Academico en Django</h1>')

def otroView(*args, **kwargs) :
    return HttpResponse('<h1> Otra pagina</h1>')