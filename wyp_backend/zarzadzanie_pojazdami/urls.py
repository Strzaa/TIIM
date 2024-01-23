from django.urls import path
from .views import dodaj_pojazd
from .views import DodajPojazdAPIView, WszystkiePojazdyAPIView, WyszukajPojazdyAPIView

urlpatterns = [
    path('dodaj_pojazd/', dodaj_pojazd, name='dodaj_pojazd'),
    path('api/dodaj_pojazd/', DodajPojazdAPIView.as_view(), name='api_dodaj_pojazd'),
    path('api/wszystkie_pojazdy/', WszystkiePojazdyAPIView.as_view(), name='api_wszystkie_pojazdy'),
    path('api/wyszukaj_pojazdy/', WyszukajPojazdyAPIView.as_view(), name='api_wyszukaj_pojazdy'),
]