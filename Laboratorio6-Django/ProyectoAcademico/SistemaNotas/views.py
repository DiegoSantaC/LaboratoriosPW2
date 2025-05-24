from django.shortcuts import render, redirect
from django.http import HttpResponse
from .forms import AlumnoForm, CursoForm, NotasAlumnosPorCursoForm

# Create your views here.
def miHomeView(request, *args, **kwargs) :
    print(args, kwargs)
    print(request.user)
    return render(request,"base1.html",{})

def registrar_alumno(request):
    if request.method == 'POST':
        form = AlumnoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('PaginaInicio')  
    else:
        form = AlumnoForm()
    return render(request, 'registrar_alumno.html', {'form': form})

def registrar_curso(request):
    if request.method == 'POST':
        form = CursoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('curso_registrado')
    else:
        form = CursoForm()
    return render(request, 'registrar_curso.html', {'form': form})

def registrar_nota(request):
    if request.method == 'POST':
        form = NotasAlumnosPorCursoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('nota_registrada')
    else:
        form = NotasAlumnosPorCursoForm()
    return render(request, 'registrar_nota.html', {'form': form})

def otroView(request) :
    return HttpResponse('<h1> Otra pagina</h1>')