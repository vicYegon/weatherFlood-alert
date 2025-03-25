from django.urls import path
from .views import WeatherListCreateView, FloodAlertListCreateView

urlpatterns = [
    path('weather/', WeatherListCreateView.as_view(), name='weather-list'),
    path('alerts/', FloodAlertListCreateView.as_view(), name='alert-list'),
]