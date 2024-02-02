from rest_framework import serializers
from .models import Project
from rest_framework.settings import api_settings


class ProjectSerializer(serializers.ModelSerializer):
  class Meta:
    model = Project
    date = serializers.DateField(format=api_settings.DATE_FORMAT),
    time = serializers.TimeField(format=api_settings.DATE_FORMAT),
    fields = ('id', 'date', 'time','institucion', 'situacion', 'descripcion', 'created_at')
    read_only_fields = ('created_at', )