from django.contrib.auth.models import User
from rest_framework import serializers
from .models import *


class CreateUserSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ["username", "first_name", "last_name",
            "email", "password", "password2"]
        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True}
        }

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."})

        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )

        user.set_password(validated_data['password'])
        user.save()

        return user


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileModel
        fields = ["avatar", "title", "bio", "phone"]


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email", "first_name", "last_name"]
        read_only_fields = ["id"]


class UserProfileSerializer(serializers.ModelSerializer):
    account = ProfileSerializer(source="profilemodel", many=False)

    class Meta:
        model = User
        fields = ["username", "email", "first_name", "last_name", "account"]
        read_only_fields = ["id"]

    def update(self, instance, validated_data):
        profile_data = validated_data.get("profilemodel")

        instance.username = validated_data.get('username', instance.username)
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.email = validated_data.get('email', instance.email)
        
        instance.save()
        return instance
        
