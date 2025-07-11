
from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from api import views
from django.conf.urls.static import static
from django.conf import settings

router = routers.DefaultRouter()
router.register(r'movie', views.MovieViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)