
from django.contrib import admin
from django.urls import path
from inicio.views import myHomeView,anotherView
from personas.views import personaTestView, personaCreateView, searchForHelp, personaAnotherCreateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', myHomeView, name="Mi pagina de inicio"),
    path('persona/', personaTestView, name="otro"),
    path('another/', anotherView, name="otro"),
    path('agregar/', personaCreateView, name="createPersona"),
    path('search/', searchForHelp, name="search"),
    path('agregar2/', personaAnotherCreateView, name="agregar2"),
]
