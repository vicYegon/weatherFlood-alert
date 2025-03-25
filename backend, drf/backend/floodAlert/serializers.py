from rest_framework import serializers
from .models import Weather, FloodAlert

class WeatherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Weather
        fields = '__all__'

class FloodAlertSerializer(serializers.ModelSerializer):
    class Meta:
        model = FloodAlert
        fields = '__all__'