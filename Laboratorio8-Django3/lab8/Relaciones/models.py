from django.db import models

# Create your models here.
class Simple(models.Model):
    texto = models.CharField(max_length=10)
    numero = models.IntegerField(null=True)
    url = models.URLField(default='www.example.com')

    def __str__(self):
        return self.url
    
class Fecha(models.Model):
    fecha= models.DateTimeField()

class Nulo(models.Model):
    col = models.CharField(max_length=10, blank=True, null=True)

class Lenguaje(models.Model):  # 1 Lenguaje puede tener varios Framework
    name= models.CharField(max_length=10)

    def __str__(self):
        return self.name

class FrameWork(models.Model):  # 1 Framework solo puede tener 1 lenguaje
    name= models.CharField(max_length=10)
    lenguaje = models.ForeignKey(Lenguaje, on_delete=models.CASCADE) 