from django.db import models

# Create your models here.
class Alumno(models.Model):
    CUI = models.CharField(max_length=100, unique=True)
    nombres = models.CharField(max_length=200)
    apellidos = models.CharField(max_length=200)
 
    def __str__(self):
    	return f"{self.nombres } {self.apellidos} {self.CUI}"
 
class Curso(models.Model):
    codigo = models.CharField(max_length=100, unique=True)
    nombre = models.CharField(max_length=200)
 
    def __str__(self):
        return f"Curso:  {self.nombre} codigo: {self.codigo}"
