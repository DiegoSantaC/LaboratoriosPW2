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
    PersonaViewDetail,
    PersonaViewCreate,
    PersonaViewUpdate,
    PersonaViewDelete,
    )

app_name= 'personas'
urlpatterns = [
    #path('persona/', personaTestView, name="otro"),
    path('', PersonasViewList.as_view(), name='persona-list'),
    path('add/', PersonaViewCreate.as_view(), name="persona-create"),
    path('add2/', personaAnotherCreateView, name="add2"),
    path('search/', searchForHelp, name="searchHelp"),
    path('<int:pk>/', PersonaViewDetail.as_view(), name= 'persona-detail'),
    path('<int:pk>/update/', PersonaViewUpdate.as_view(), name= 'persona-update'),
    path('<int:pk>/delete/', PersonaViewDelete.as_view(), name= 'persona-delete'),
]