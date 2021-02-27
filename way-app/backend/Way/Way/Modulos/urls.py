from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'api/list', views.get_rutas_list, name='get_rutas_list'),
]


