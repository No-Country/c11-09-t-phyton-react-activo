from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User
from rest_framework import serializers


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('username','email','password',)
        
        
class RegistrationSerializer(ModelSerializer):

    class Meta:
        model = User
        fields = ('username','email','password',)
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def save(self):
        user = User(username=self.validated_data['username'])
        
        password = self.validated_data['password']
        email=self.validated_data['email']
        
        user.email = email
        user.set_password(password)
        user.save()
        return user