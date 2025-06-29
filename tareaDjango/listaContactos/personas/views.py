from django.shortcuts import render, get_object_or_404, redirect
from .models import Persona
from django.urls import reverse_lazy
from django.http import HttpResponse, JsonResponse
from .forms import PersonaForm, RawPersonaForm
from django.views.generic import (
    ListView,
    DetailView,
    CreateView,
    UpdateView,
    DeleteView,
    View,
    )

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
    obj = get_object_or_404(Persona, id = myID)
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

def PersonaDeleteView(request, myID):
    obj = get_object_or_404(Persona, id=myID)
    if request.method == 'POST':
        print("Lo borro")
        obj.delete()
        return redirect('../')
    context = {
        'objeto': obj,
    }
    return render(request, 'personas/personaDelete.html', context)


#USANDO VISTAS GENERICAS
class PersonasViewList(ListView):
    model = Persona

class PersonaViewDetail(DetailView):
    model = Persona

class PersonaViewCreate(CreateView):
    model = Persona
    fields = [
        'nombres',
        'apellidos',
        'edad',
        'donador',
    ]

class PersonaViewUpdate(UpdateView):
    model = Persona
    fields = [
        'nombres',
        'apellidos',
        'edad',
        'donador',
    ]

class PersonaViewDelete(DeleteView):
    model = Persona
    success_url = reverse_lazy('personas:persona-list')

class PersonaQueryView(View):
    def get(self, request, *args, **kwargs):
        queryset = Persona.objects.filter(edad__lte='30')
        return JsonResponse(list(queryset.values()), safe=False)
    
