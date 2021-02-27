# Create your views here.

from django.shortcuts import render
from django.http import JsonResponse
from .models import Rutas
from .serializers import RutasSerializer
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.csrf import csrf_protect
from rest_framework.views import APIView


#@api_view(["POST","GET"]) @api_view(["POST", "GET"])
#@api_view (['POST']) 
def index(request):
    rutas_list = Rutas.objects.order_by('-Nombre')
    context = {'rutas_list': rutas_list}
    return render(request, 'Templates/index.html', context)


# Rest api end point
#@api_view(["POST","GET"])
#@api_view (['POST']) 
#@csrf_protect
def get_rutas_list(request):
    """
    Returns Json list of all restaurants
    """
    if request.method == "GET":
        rutas_list = Rutas.objects.order_by('-Nombre')
        serializer = RutasSerializer(rutas_list, many=True)
        return JsonResponse(serializer.data, safe=False)