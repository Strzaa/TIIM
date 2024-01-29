from django.urls import path
from .views import DodajPojazd, WyszukiwarkaPojazdow, WylistujMarki, WylistujKategorie, EdytujPojazd, UsunPojazd, Wyloguj, \
    WypozyczPojazd, WyszukajWypozyczenia, WypozyczeniaKlienta, CzyZalogowany

urlpatterns = [
    path('dodaj_pojazd/', DodajPojazd.as_view(), name='dodaj_pojazd'),
    path('wyszukaj_pojazdy/', WyszukiwarkaPojazdow.as_view(), name='wyszukaj_pojazdy'),
    path('wylistuj_marki/', WylistujMarki.as_view(), name='wylistuj_marki'),
    path('wylistuj_kategorie/', WylistujKategorie.as_view(), name='wylistuj_kategorie'),
    path('edytuj_pojazd/<str:nr_rejestracyjny>/', EdytujPojazd.as_view(), name='edytuj-pojazd'),
    # curl -X PATCH http://localhost:8000/zarzadzanie_pojazdami/edytuj_pojazd/numer_rejestracyjny/ -H "Authorization: Bearer <TOKEN>" -d '{
    #   "cena": 55000.00
    # }'
    path('usun_pojazd/<str:nr_rejestracyjny>/', UsunPojazd.as_view(), name='usun_pojazd'),
    path('wyloguj/', Wyloguj.as_view(), name='wyloguj'),
    path('wypozycz_pojazd/', WypozyczPojazd.as_view(), name='wypozycz_pojazd'),
    path('wyszukaj_wypozyczenia/', WyszukajWypozyczenia.as_view(), name='wyszukaj_wypozyczenia'),
    # http://localhost:8000/zarzadzanie_pojazdami/wyszukaj_wypozyczenia/?email=k2@example.com
    # http://localhost:8000/zarzadzanie_pojazdami/wyszukaj_wypozyczenia/
    path('wypozyczenia_klienta/', WypozyczeniaKlienta.as_view(), name='wyszukaj_wypozyczenia'),


    path('czy_zalogowany/', CzyZalogowany.as_view(), name='wyszukaj_wypozyczenia'),

]
######  daty wolnych dni wypożyczenia dla konkretnego
#### usunięcie wypożyczenia przed opłatą
#####   wypozyczenie - zmiana statusu wypozyczenia
#####   klient - rejestracja klienta - dodawanie klietów

### grupy