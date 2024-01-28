from rest_framework import generics, status
from .models import Pojazd
from .serializers import PojazdSerializer, ObrazekSerializer
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.views import APIView
from rest_framework.response import Response


class DodajPojazd(generics.CreateAPIView):
    serializer_class = PojazdSerializer

    def post(self, request, *args, **kwargs):
        if 'obrazek' in request.FILES:
            obrazek_serializer = ObrazekSerializer(data=request.FILES)
            if obrazek_serializer.is_valid():
                obrazek_serializer.save()
                obrazek_url = obrazek_serializer.data['obrazek']
                request.data['zdjecie1'] = obrazek_url
            else:
                return Response({'status': 'error', 'errors': obrazek_serializer.errors}, status=400)

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=201, headers=headers)


class WyszukiwarkaPojazdow(generics.ListAPIView):
    queryset = Pojazd.objects.all()
    serializer_class = PojazdSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['marka', 'cena', 'kategoria', 'moc']

class UsunPojazd(generics.DestroyAPIView):
    queryset = Pojazd.objects.all()
    serializer_class = PojazdSerializer
    lookup_field = 'nr_rejestracyjny'  # Ustaw pole, które ma być używane jako identyfikator

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response({'status': 'success'}, status=status.HTTP_200_OK)

class WylistujMarki(APIView):
    def get(self, request):
        marki = Pojazd.objects.values_list('marka', flat=True).distinct()
        return Response(marki)

class WylistujKategorie(APIView):
    def get(self, request):
        kategoria = Pojazd.objects.values_list('kategoria', flat=True).distinct()
        return Response(kategoria)

class UsunPojazd(generics.DestroyAPIView):
    queryset = Pojazd.objects.all()
    serializer_class = PojazdSerializer
    lookup_field = 'nr_rejestracyjny'

    def destroy(self, request, *args, **kwargs):
        try:
            return super().destroy(request, *args, **kwargs)
        except Exception as e:
            return Response({'status': 'error', 'message': f'Wystąpił błąd: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
