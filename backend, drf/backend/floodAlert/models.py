from django.db import models

# Create your models here.
class Weather(models.Model):
    location = models.CharField(max_length=255)
    temperature = models.FloatField()
    humidity = models.FloatField()
    rainfall = models.FloatField()
    recorded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.location} - {self.recorded_at.strftime('%Y-%m-%d %H:%M')}"
    
class FloodAlert(models.Model):
    location = models.CharField(max_length=255)
    alert_level = models.CharField(
        max_length=20, 
        choices=[('Low', 'Low'), 
                    ('Moderate','Moderate'),
                    ('High','High'),
                    ('Severe','Severe')]
    )
    issued_at = models.DateTimeField(auto_now_add=True)
    weather =  models.ForeignKey(Weather, on_delete=models.CASCADE)

    def __str__(self):
        return f"Flood Alert: {self.location} - {self.alert_level}"