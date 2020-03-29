from rest_framework import serializers
from .models import allCases, state


class AllCaseSerializer(serializers.ModelSerializer):

    class Meta:
        model = allCases
        fields = '__all__'


class AllStatesSerializer(serializers.ModelSerializer):

    class Meta:
        model = state
        fields = '__all__'
