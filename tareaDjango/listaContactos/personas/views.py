from django.shortcuts import render
from .models import Persona
from .forms import PersonaForm

# Create your views here.
def personaTestView(request):
    obj = Persona.objects.get(id = 1)
    myContext = {
        'objeto':obj,
    }
    return render(request,"personas/descripcion.html",myContext)

def personaCreateView(request):
    """form = PersonaForm(request.POST or None)
    if form.is_valid():
        form.save()
        form = PersonaForm()
    context = {
        'form': form
    }"""
    if request.method == 'POST':
        nombre = request.POST.get('q')
        print(nombre)
    print('POST: ', request.POST)
    return render(request, 'personas/personaCreate.html', {})

def searchForHelp(request):
    return render(request, 'personas/search.html', {})
