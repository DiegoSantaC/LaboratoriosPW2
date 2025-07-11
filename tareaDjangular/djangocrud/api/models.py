from django.db import models

# Create your models here.
class Movie(models.Model):
    nombre = models.CharField(max_length=32)
    url = models.URLField(null=True, blank=True)
    logo = models.ImageField(upload_to='logos/', null=True, blank=True)
