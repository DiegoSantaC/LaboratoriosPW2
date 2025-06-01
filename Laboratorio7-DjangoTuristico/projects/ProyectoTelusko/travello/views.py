from django.shortcuts import render

# Create your views here.
def index(request,*args, **kwargs) :
    print(args,kwargs)
    print(request.user)
    return render(request, 'index.html')