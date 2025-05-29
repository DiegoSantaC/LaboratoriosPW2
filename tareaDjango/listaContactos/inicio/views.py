from django.shortcuts import render
from django.http import HttpResponse


def myHomeView(request,*args,**kwargs):
    print(args,kwargs)
    print(request.user)
    return render(request,"home.html",{})

def anotherView(request):
    return HttpResponse("<h2>Solo otra pagina más</h2>")
