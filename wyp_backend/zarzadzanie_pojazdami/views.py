from django.shortcuts import render

# Create your views here.


from django.shortcuts import render, redirect
from .forms import PojazdForm

def dodaj_pojazd(request):
    if request.method == 'POST':
        form = PojazdForm(request.POST)
        if form.is_valid():
            form.save()
    else:
        form = PojazdForm()
    return render(request, 'dodaj_pojazd.html', {'form': form})


from rest_framework import generics
from rest_framework.response import Response
from .models import Pojazd
from .serializers import PojazdSerializer

class DodajPojazdAPIView(generics.CreateAPIView):
    queryset = Pojazd.objects.all()
    serializer_class = PojazdSerializer

class WszystkiePojazdyAPIView(generics.ListAPIView):
    queryset = Pojazd.objects.all()
    serializer_class = PojazdSerializer

class WyszukajPojazdyAPIView(generics.ListAPIView):
    serializer_class = PojazdSerializer

    def get_queryset(self):
        query = self.request.query_params.get('marka', '')
        return Pojazd.objects.filter(marka__exact=query)

