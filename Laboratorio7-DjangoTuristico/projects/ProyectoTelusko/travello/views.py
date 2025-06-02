from django.shortcuts import render
from .models import Destination

# Create your views here.
def index(request,*args, **kwargs) :
    print(request.user)
    dest1 = Destination()
    dest1.name = 'Perú'
    dest1.desc = 'La mejor gastronomia'

    dest2 = Destination()
    dest2.name = 'Brazil'
    dest2.desc = 'La mejor arquitectura'

    dest3 = Destination()
    dest3.name = 'Argentina'
    dest3.desc = 'Lo mejor en el futbol'

    return render(request, 'index.html', { 'dest1' : dest1, 'dest2' : dest2,'dest3' : dest3})