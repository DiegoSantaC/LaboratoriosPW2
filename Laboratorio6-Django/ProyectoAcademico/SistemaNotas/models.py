from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.
class Alumno(models.Model):
    CUI = models.CharField(max_length=100, unique=True, primary_key=True)
    nombres = models.CharField(max_length=200)
    apellidos = models.CharField(max_length=200)
 
    def __str__(self):
    	return f"{self.nombres } {self.apellidos} , CUI: {self.CUI}"
 
class Curso(models.Model):
    codigo = models.CharField(max_length=100, unique=True, primary_key=True)
    nombre = models.CharField(max_length=200)
 
    def __str__(self):
        return f"{self.nombre} , codigo: {self.codigo}"
    
class NotasAlumnosPorCurso(models.Model):
    alumno = models.ForeignKey(Alumno, on_delete=models.CASCADE)
    curso = models.ForeignKey(Curso, on_delete=models.CASCADE)
    nota = models.IntegerField(validators=[MinValueValidator(0),MaxValueValidator(20)])   

 
    def __str__(self):
        return f"Nota: {self.nota} , Alumno: {self.alumno.CUI} , Curso: {self.curso.codigo}"
