
from django.contrib import admin
from django.urls import path, include
from inicio.views import myHomeView,anotherView

urlpatterns = [
    path('personas/', include('personas.urls')),
    path('admin/', admin.site.urls),
    path('', myHomeView, name="Mi pagina de inicio"),
    path('another/', anotherView, name="otro"),
]
