from django import forms
from .models import Pojazd

class PojazdForm(forms.ModelForm):
    class Meta:
        model = Pojazd
        fields = ['marka', 'model', 'rok_produkcji']