"""
URL configuration for ProyectoAcademico project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from SistemaNotas import views

urlpatterns = [
    path('', views.miHomeView, name='PaginaInicio'),
    path('alumno/registrar/', views.registrar_alumno, name='registrar_alumno'),
    path('curso/registrar/', views.registrar_curso, name='registrar_curso'),
    path('nota/registrar/', views.registrar_nota, name='registrar_nota'),
    path('otro/', views.otroView),
    path('admin/', admin.site.urls),
]
