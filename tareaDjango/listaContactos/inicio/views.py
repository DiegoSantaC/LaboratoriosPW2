from django.shortcuts import render
from django.http import HttpResponse


def myHomeView(request,*args,**kwargs):
    print(args,kwargs)
    print(request.user)
    myContext = {
        'myText': 'Esto es sobre nosotros',
        'myNumber': 123,
        'myList' : [33,44,55,66,77]
    }
    return render(request,"block.html",myContext)

def anotherView(request):
    return HttpResponse("<h2>Solo otra pagina más</h2>")
