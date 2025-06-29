from django.urls import path
from personas.views import (
    #personaTestView,
    personaCreateView, 
    searchForHelp, 
    personaAnotherCreateView,
    PersonShowObject,
    #PersonasListView, 
    PersonaDeleteView,
    PersonasViewList,
    )

app_name= 'personas'
urlpatterns = [
    #path('persona/', personaTestView, name="otro"),
    path('', PersonasViewList.as_view(), name="listing"),
    path('add/', personaCreateView, name="add"),
    path('add2/', personaAnotherCreateView, name="add2"),
    path('search/', searchForHelp, name="searchHelp"),
    path('<int:myID>/', PersonShowObject, name= 'search'),
    path('<int:myID>/delete/', PersonaDeleteView, name= 'delete'),
]