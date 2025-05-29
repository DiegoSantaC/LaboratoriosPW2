from django.shortcuts import render
from .models import Persona

# Create your views here.
def personaTestView(request):
    obj = Persona.objects.get(id = 3)
    myContext = {
        'nombres': obj.nombres,
        'apellidos': obj.apellidos,
        'edad' : obj.edad,
    }
    return render(request,"personas/test.html",myContext)