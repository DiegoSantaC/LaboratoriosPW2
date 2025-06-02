from django.shortcuts import render
from .models import Destination

# Create your views here.
def index(request,*args, **kwargs) :
    print(request.user)
    dest1 = Destination()
    dest1.name = 'Perú'
    dest1.desc = 'La mejor gastronomia'
    return render(request, 'index.html', { 'dest1' : dest1})