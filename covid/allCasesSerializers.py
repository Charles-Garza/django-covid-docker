from rest_framework import serializers
from .models import allCases


class TaskSerializer(serializers.ModelSerializer):

    class Meta:
        model = allCases
        fields = '__all__'
