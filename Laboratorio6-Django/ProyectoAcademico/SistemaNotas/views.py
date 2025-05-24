from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def miHomeView(request, *args, **kwargs) :
    print(args, kwargs)
    print(request.user)
    return render(request,"home.html",{})

def otroView(request) :
    return HttpResponse('<h1> Otra pagina</h1>')