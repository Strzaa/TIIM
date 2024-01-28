from django.urls import path
from .views import DodajPojazd, WyszukiwarkaPojazdow, WylistujMarki, WylistujKategorie, UsunPojazd

urlpatterns = [
    path('dodaj_pojazd/', DodajPojazd.as_view(), name='dodaj_pojazd'),
    path('wyszukaj_pojazdy/', WyszukiwarkaPojazdow.as_view(), name='wyszukaj_pojazdy'),
    path('wylistuj_marki/', WylistujMarki.as_view(), name='wylistuj_marki'),
    path('wylistuj_kategorie/', WylistujKategorie.as_view(), name='wylistuj_kategorie'),
    path('usun_pojazd/<str:nr_rejestracyjny>/', UsunPojazd.as_view(), name='usun_pojazd'),
]