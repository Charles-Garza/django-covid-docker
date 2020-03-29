from rest_framework import serializers
from .models import allCases, state, county


class AllCaseSerializer(serializers.ModelSerializer):

    class Meta:
        model = allCases
        fields = '__all__'


class AllStatesSerializer(serializers.ModelSerializer):

    class Meta:
        model = state
        fields = '__all__'


class AllCountySerializer(serializers.ModelSerializer):

    class Meta:
        model = county
        fields = '__all__'
