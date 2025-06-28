from django.urls import path
from personas.views import (
    #personaTestView,
    personaCreateView, 
    searchForHelp, 
    personaAnotherCreateView,
    PersonShowObject,
    PersonasListView, 
    PersonaDeleteView,
    )

app_name= 'personas'
urlpatterns = [
    #path('persona/', personaTestView, name="otro"),
    path('', PersonasListView, name="listing"),
    path('agregar/', personaCreateView, name="create"),
    path('agregar2/', personaAnotherCreateView, name="agregar2"),
    path('search/', searchForHelp, name="search"),
    path('<int:myID>/', PersonShowObject, name= 'buscar'),
    path('<int:myID>/delete/', PersonaDeleteView, name= 'delete'),
]