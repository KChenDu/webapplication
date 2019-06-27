from .models import Area, Company, Event
from rest_framework import serializers

class AreaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Area
        fields = ('url', 'title')

class CompanySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Company
        fields = ('url', 'area', 'name', 'description', 'website_url', 'likes')

class EventSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Event
        fields = ('url', 'company', 'description', 'date')
