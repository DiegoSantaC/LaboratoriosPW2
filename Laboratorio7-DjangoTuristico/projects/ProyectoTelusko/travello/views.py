from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from .models import Destination

# Create your views here.
def index(request,*args, **kwargs) :
    dests = Destination.objects.all()

    return render(request, 'index.html', { 'dests' : dests })

def listar(request):
    dests = Destination.objects.all()

    return render(request, 'admin.html', { 'dests' : dests })

def agregar(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        desc = request.POST.get('desc')
        price = request.POST.get('price')
        offert = 'offert' in request.POST  # Checkbox
        img = request.FILES.get('img')

        destino = Destination(
            name=name,
            desc=desc,
            price=price,
            offert=offert,
            img=img
        )
        destino.save()
        messages.success(request, 'Destino agregado correctamente.')
        return redirect('listar')

    return render(request, 'agregar.html')

def eliminar(request, id):
    destino = get_object_or_404(Destination, id=id)
    destino.delete()

    return redirect('listar')