from rest_framework import serializers
from Modulos.models import Rutas


class RutasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rutas
        fields = ('id_Ruta', 'Nombre', 'altitud', 'longitud', 'Archivoruta', 'Descripcion', 'Duracion')