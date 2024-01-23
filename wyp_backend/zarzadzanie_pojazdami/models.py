from django.db import models

# Create your models here.

class Pojazd(models.Model):
    marka = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    rok_produkcji = models.IntegerField()

class Klient(models.Model):
    imie = models.TextField()
    nazwisko = models.TextField()
    wiek = models.IntegerField()