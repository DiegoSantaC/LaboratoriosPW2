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
    #obj = Persona.objects.get(id = 3)
    initialValues = {
        'nombres' : 'Sin Nombre',
        'apellidos' : 'Sin Apellidos',
        'edad' : 0,
    }
    form = PersonaForm(request.POST or None, initial= initialValues) #, instance = obj)
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
    form = RawPersonaForm() #request.GET
    if request.method == "POST":
        form = RawPersonaForm(request.POST)
        if form.is_valid():
            print(form.cleaned_data)
            Persona.objects.create(**form.cleaned_data)
        else:
            print(form.errors)
    context = {
        'form': form,
    }
    return render(request, 'personas/personaCreate.html', context )

def PersonShowObject(request, myID):
    obj = Persona.objects.get(id = myID)
    context = {
        'objeto': obj,
    }
    return render(request, 'personas/descripcion.html', context)

def PersonasListView(request):
    queryset = Persona.objects.all()
    context = {
        'list': queryset,
    }
    return render(request, 'personas/personaLista.html', context)
