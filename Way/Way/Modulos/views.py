# Create your views here.

from django.shortcuts import render
from django.http import JsonResponse
from .models import Rutas
from .serializers import RutastSerializer
from django.views.decorators.csrf import csrf_exempt


def index(request):
    rest_list = Rutas.objects.order_by('-id_Ruta')
    context = {'rest_list': rest_list}
    return render(request, 'food/index.html', context)


# Rest api end point
def get_rutas_list(request):
    """
    Returns Json list of all restaurants
    """
    if request.method == "GET":
        rutas_list = Rutas.objects.order_by('-rest_list')
        serializer = RutasSerializer(rutas_list, many=True)
        return JsonResponse(serializer.data, safe=False)