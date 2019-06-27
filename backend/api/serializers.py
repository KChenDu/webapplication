from rest_framework import serializers
from api.models import User


class UserSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = User
        fields = ('url', 'email', 'password', 'first_name', 'last_name', 'turma')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user

    def update(self, user, validated_data):
        user.first_name = validated_data.get('first_name', user.first_name)
        user.last_name = validated_data.get('last_name', user.last_name)
        user.turma = validated_data.get('turma', user.turma)

        password = validated_data.pop('password')
        user.set_password(password)

        user.save()

        return user
