from django.shortcuts import render
from rest_framework import generics
from .models import Weather, FloodAlert
from .serializers import WeatherSerializer, FloodAlertSerializer

# Create your views here.
class WeatherListCreateView(generics.ListCreateAPIView):
    queryset = Weather.objects.all()
    serializer_class = WeatherSerializer

class FloodAlertListCreateView(generics.ListCreateAPIView):
    queryset = FloodAlert.objects.all()
    serializer_class = FloodAlertSerializer
