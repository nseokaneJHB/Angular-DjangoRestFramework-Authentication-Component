from django.contrib.auth.models import User
from rest_framework import serializers
from .models import *


class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password']
        write_only_fields = ['password']
            
        
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username', 'email', 'first_name', 'last_name']
        read_only_fields = ['id','username']


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileModel
        exclude = ['account']
        read_only_fields = ['id']


class UserProfileSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(source='profilemodel', many=False)

    class Meta:
        model = User
        exclude = ["password", "last_login", "is_superuser", "is_staff", "is_active", "date_joined", "groups", "user_permissions"]