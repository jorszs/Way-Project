from rest_framework import serializers
from Modulos.models import Rutas


class RutasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rutas
        fields = ('id_ruta', 'Nombre', 'altitud', 'longitud', 'Archivoruta', 'descripcion', 'Duracion')