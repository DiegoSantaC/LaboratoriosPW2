from django import forms
from .models import Alumno,Curso, NotasAlumnosPorCurso
 
# Formulario para crear un alumno
class AlumnoForm(forms.ModelForm):
    class Meta:
        model = Alumno
        fields = ['CUI', 'nombres', 'apellidos']

# Formulario para crear un curso
class CursoForm(forms.ModelForm):
    class Meta:
        model = Curso
        fields = ['codigo', 'nombre']

# Formulario para registrar notas de un alumno en un curso
class NotasAlumnosPorCursoForm(forms.ModelForm):
    class Meta:
        model = NotasAlumnosPorCurso
        fields = ['alumno', 'curso', 'nota']