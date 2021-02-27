from django.db import models
from django.utils import timezone
from datetime import date
from django_google_maps import fields as map_fields


class PuntosInteres(models.Model):
	
	id_PuntosInteres = models.AutoField(primary_key=True)
	Nombre= models.CharField(max_length=20)
	Descripcion= models.CharField(max_length=20)
	
	def __str__(self):
		return self.Nombre
		

class Fotos(models.Model):
	id_Fotos = models.AutoField(primary_key=True)
	Valor = models.CharField(max_length=100)
	
	def __str__(self):
		return self.Valor

class Rutas(models.Model):
	id_Ruta = models.AutoField(primary_key=True)
	Nombre = models.CharField(max_length=40)
	altitud= models.CharField(max_length=20)
	longitud= models.CharField(max_length=20)
	Archivoruta= models.CharField(max_length=20)
	Descripcion= models.CharField(max_length=20)
	Duracion= models.CharField(max_length=20)

	def __str__(self):
		return self.Nombre

class Rutas_Fotos(models.Model):
	id_Ruta = models.AutoField(primary_key=True)
	idpuntosinteres = models.ForeignKey(PuntosInteres, on_delete=models.CASCADE)
	idFotos = models.ForeignKey(Fotos, on_delete=models.CASCADE)

class Puntosinteres_fotos(models.Model):
	id_PuntosInteres_fotos = models.AutoField(primary_key=True)
	idFotos = models.ForeignKey(Fotos, on_delete=models.CASCADE)
	idRutas = models.ForeignKey(Rutas, on_delete=models.CASCADE)


class Idiomas(models.Model):
	id_Idioma = models.AutoField(primary_key=True)
	Nombre = models.CharField(max_length=100)
	
	def __str__(self):
		return self.Nombre


class Temas(models.Model):
	id_Tema = models.AutoField(primary_key=True)
	Nombre = models.CharField(max_length=100)
	
	def __str__(self):
		return self.Nombre

class Configuraciones(models.Model):
	id_Configuracion = models.AutoField(primary_key=True)
	Nombre = models.CharField(max_length=100)
	idTemas = models.ForeignKey(Temas, on_delete=models.CASCADE,default=1)
	idIdiomas = models.ForeignKey(Idiomas, on_delete=models.CASCADE,default= 1)
	

	def __str__(self):
		return self.Nombre






class Rental(models.Model):
	address = map_fields.AddressField(max_length=200)
	geolocation = map_fields.GeoLocationField(max_length=100)