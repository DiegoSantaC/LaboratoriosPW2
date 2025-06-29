from django.urls import path
from personas.views import (
    #personaTestView,
    personaCreateView, 
    searchForHelp, 
    personaAnotherCreateView,
    #PersonShowObject,
    #PersonasListView, 
    PersonaDeleteView,
    PersonasViewList,
    PersonaDetailView,
    PersonaViewCreate,
    )

app_name= 'personas'
urlpatterns = [
    #path('persona/', personaTestView, name="otro"),
    path('', PersonasViewList.as_view(), name="persona-list"),
    path('add/', PersonaViewCreate.as_view(), name="persona-create"),
    path('add2/', personaAnotherCreateView, name="add2"),
    path('search/', searchForHelp, name="searchHelp"),
    path('<int:pk>/', PersonaDetailView.as_view(), name= 'persona-detail'),
    path('<int:myID>/delete/', PersonaDeleteView, name= 'delete'),
]