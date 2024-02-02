from django.db import models

# Create your models here.
class Project(models.Model):
  date = models.DateField()
  time = models.TimeField()
  opciones_de_institucion = [
    ("Justo Sierra","Justo Sierra" ),
    ("Querétaro","Querétaro"),
    ("Tennyson","Tennyson"),
    ("Panteón","Panteón"),
    ("San Sulpicio","San Sulpicio" ),
    ("Huerta","Huerta"),
    ("Velatorio","Velatorio"),
    ("Palma","Palma"),
    ("Colegio","Colegio"),
    ("Toledo","Toledo"),
    ("Isla de Agua","Isla de Agua" ),
    ("Olivos","Olivos"),
  ]
  institucion = models.CharField(max_length=20, choices=opciones_de_institucion)
  opciones_de_situacion = [
    ("Indicación Ignorada", "Indicación Ignorada"),
    ("Consigna no cumplida", "Consigna no cumplida"),
    ("Visitante", "Visitante"),
    ("Bulto en periferia", "Bulto en periferia"),
    ("Bulto en interiores", "Bulto en interiores"),
    ("Vehículo en periferia", "Vehículo en periferia"),
    ("Manifestaciíon", "Manifestaciíon"),
    ("Incendio", "Incendio")
  ]
  situacion = models.CharField(max_length=40, choices=opciones_de_situacion)
  descripcion = models.CharField(max_length=1000, )
  created_at = models.DateTimeField(auto_now_add=True)