from django.shortcuts import render
from .models import Destination

# Create your views here.
def index(request,*args, **kwargs) :
    print(request.user)
    dest1 = Destination()
    dest1.name = 'Perú'
    dest1.desc = 'La mejor gastronomia'
    dest1.img = '1.png'
    dest1.price = 900
    dest1.offert = True

    dest2 = Destination()
    dest2.name = 'Brazil'
    dest2.desc = 'La mejor arquitectura'
    dest2.img = '2.png'
    dest2.price = 500
    dest2.offert = True

    dest3 = Destination()
    dest3.name = 'Argentina'
    dest3.desc = 'Lo mejor en el futbol'
    dest3.img = '3.png'
    dest3.price = 700
    dest3.offert = False

    list = [dest1, dest2, dest3]

    return render(request, 'index.html', { 'list' : list})