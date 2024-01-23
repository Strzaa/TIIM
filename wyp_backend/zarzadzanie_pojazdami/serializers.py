from rest_framework import serializers
from .models import Pojazd

class PojazdSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pojazd
        fields = '__all__'
