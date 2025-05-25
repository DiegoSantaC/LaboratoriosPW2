from django.db import models

# Create your models here.
class Personas(models.Model):
    nombres = models.TextField()
    apellidos = models.TextField()
    edad = models.TextField()