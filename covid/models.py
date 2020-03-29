from django.db import models
from datetime import datetime

# Create your models here.
class allCases(models.Model):
    id = models.IntegerField(primary_key=True)
    cases = models.IntegerField()
    deaths = models.IntegerField()
    recovered = models.IntegerField()
    updated = models.DateTimeField()
    active = models.IntegerField()

    def save(self, *args, **kwargs):
        return super(allCases, self).save(*args, **kwargs)

    def __str__(self):
        return self.id



class countries(models.Model):
    country_name = models.CharField(max_length=100, primary_key=True)
    country_ID = models.IntegerField()
    longitude = models.FloatField()
    flag_image = models.CharField(max_length=100)
    iso3 = models.CharField(max_length=100)
    cases = models.IntegerField()
    today_cases = models.IntegerField()
    deaths = models.IntegerField()
    today_deaths = models.IntegerField()
    recovered = models.IntegerField()
    active = models.IntegerField()
    critical = models.IntegerField()
    cases_per_million = models.IntegerField()
    deaths_per_million = models.IntegerField()

    def __str__(self):
        return self.country_name


class state(models.Model):
    state_name = models.CharField(max_length=100, primary_key=True)
    cases = models.IntegerField()
    today_cases = models.IntegerField()
    deaths = models.IntegerField()
    today_deaths = models.IntegerField
    active = models.IntegerField()

    def save(self, *args, **kwargs):
        return super(state, self).save(*args, **kwargs)

    def __str__(self):
        return self.state_name


class county(models.Model):
    county_name = models.CharField(max_length=100, primary_key=True)
    state_name = models.ForeignKey(state, on_delete=models.CASCADE)
    date = models.DateField()
    confirmed = models.IntegerField()
    deaths = models.IntegerField()
    latitude = models.FloatField()
    longitude = models.FloatField()

    def __str__(self):
        return self.county_name

