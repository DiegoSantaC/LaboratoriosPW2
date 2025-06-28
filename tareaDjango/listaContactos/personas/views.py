from django.shortcuts import render
from .models import Persona
from .forms import PersonaForm, RawPersonaForm

# Create your views here.
def personaTestView(request):
    obj = Persona.objects.get(id = 1)
    myContext = {
        'objeto':obj,
    }
    return render(request,"personas/descripcion.html",myContext)

def personaCreateView(request):
    form = PersonaForm(request.POST or None)
    if form.is_valid():
        form.save()
        form = PersonaForm()
    context = {
        'form': form
    }
    print('POST: ', request.POST)
    return render(request, 'personas/personaCreate.html', context )

def searchForHelp(request):
    return render(request, 'personas/search.html', {})

def personaAnotherCreateView(request):
    form = RawPersonaForm() 
    context = {
        'form': form,
    }
    return render(request, 'personas/personaCreate.html', context )
