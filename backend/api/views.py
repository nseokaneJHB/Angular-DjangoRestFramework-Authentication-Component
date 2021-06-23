from django.contrib.auth.models import User
from django.contrib.auth import logout

from rest_framework.decorators import api_view, permission_classes
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import status

from .models import ProfileModel
from .serializer import *


# ================================================ Signin & Signout ==================================================
class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)

        data = {'user_id': user.pk, 'username': user.username, 'token': token.key}

        return Response(data)

@api_view(['POST'])
def register(request):
    if request.method == 'POST':
        serializer = CreateUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
            
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def logout(request):
    return logout(request)

# ================================================ Signin & Signout ==================================================

@api_view(['GET'])
def api_overview(request):
    api_urls = {
        "GET A TOKEN": "token/",
        "GET A JSON WEB TOKEN": "json-token/",
        "REFRESH A JSON WEB TOKEN": "json-token/refresh/",
        "HOME": "/",
        "REGISTER": "register/",
        "VIEW PROFILE": "profile/",
        "VIEW USER": "user/",
    }

    return Response(api_urls)


# ================================================ Profile ==================================================

@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes((IsAuthenticated,))
def profile(request):
    user = request.user
    profile = ProfileModel.objects.get(account=user)
    
    if request.method == 'GET':
        serializer = UserProfileSerializer(user, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'PUT':
        serializer = UserProfileSerializer(user, many=False)
        profile_serializer = ProfileSerializer(instance=profile, data=request.data['account'])
        
        if profile_serializer.is_valid():
            profile_serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(profile_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        user.delete()
        return Response("User deleted!...")


@api_view(['PUT'])
@permission_classes((IsAuthenticated,))
def user(request):
    user = request.user

    if request.method == 'PUT':
        serializer = UserProfileSerializer(user, many=False)
        user_serializer = UserSerializer(instance=user, data=request.data)
        if user_serializer.is_valid():
            user_serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
# ================================================ Profile ==================================================