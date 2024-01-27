from rest_framework import serializers
from .models import Pojazd
from django.core.validators import MaxLengthValidator, MinLengthValidator, MaxValueValidator, MinValueValidator
from datetime import datetime


class PojazdSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pojazd
        fields = '__all__'

    marka = serializers.CharField(
        validators=[
            MinLengthValidator(limit_value=1, message='Nazwa marki nie może być pusta.'),
            MaxLengthValidator(limit_value=20, message='Nazwa marki nie może przekraczać 20 znaków.'),
        ])

    model = serializers.CharField(
        validators=[
            MinLengthValidator(limit_value=1, message='Nazwa modelu nie może być pusta.'),
            MaxLengthValidator(limit_value=20, message='Nazwa modelu nie może przekraczać 20 znaków.'),
        ])

    rok_produkcji = serializers.IntegerField(
        validators=[
            MinValueValidator(limit_value=1900, message='Rok produkcji nie może być wcześniejszy niż 1900.'),
            MaxValueValidator(limit_value=datetime.now().year, message='Rok produkcji nie może być późniejszy niż obecny rok.'),
        ])

    cena = serializers.DecimalField(
        max_digits=10, decimal_places=2, validators=[MinValueValidator(limit_value=0, message='Cena nie może być ujemna.')])

    moc = serializers.IntegerField(
        validators=[
            MinValueValidator(limit_value=1, message='Moc nie może być mniejsza niż 1.'),
            MaxValueValidator(limit_value=2000, message='Moc nie może być większa niż 2000.'),
        ])

    przyspieszenie = serializers.DecimalField(
        max_digits=4, decimal_places=1,
        validators=[
            MinValueValidator(limit_value=1.0, message='Przyspieszenie nie może być mniejsza niż 1.0.'),
        ])

    pojemnosc = serializers.DecimalField(
        max_digits=4, decimal_places=1,
        validators=[
            MinValueValidator(limit_value=0.1, message='Pojemność nie może być mniejsza niż 0.1.'),
            MaxValueValidator(limit_value=7.0, message='Pojemność nie może być większa niż 7.0.'),
        ])

    przebieg = serializers.IntegerField(
        validators=[
            MinValueValidator(limit_value=1, message='Przebieg nie może być mniejszy niż 1.'),
            MaxValueValidator(limit_value=1000000, message='Przebieg nie może być większy niż 1000000.'),
        ])


class ObrazekSerializer(serializers.Serializer):
    obrazek = serializers.ImageField()
