from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('listar', views.listar, name='listar'),
    path('listar/eliminar/<int:id>/', views.eliminar, name='eliminar'),
    path('listar/agregar/', views.agregar, name='agregar'),
]