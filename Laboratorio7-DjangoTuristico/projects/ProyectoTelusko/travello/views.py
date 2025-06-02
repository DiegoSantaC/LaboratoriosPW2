from django.shortcuts import render
from .models import Destination

# Create your views here.
def index(request,*args, **kwargs) :
    print(request.user)
    dests = Destination.objects.all()
    print(dests)

    return render(request, 'index.html', { 'dests' : dests })