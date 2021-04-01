from django.contrib.auth.models import User
from django.contrib.auth import logout

from rest_framework.decorators import api_view, permission_classes
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

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


def Logout(request):
    return logout(request)

# ================================================ Signin & Signout ==================================================

@api_view(['GET'])
def api_overview(request):
    api_urls = {
        "LOGIN TO GET A TOKEN": "/token",
        "VIEW PROFILE": "/"
    }

    return Response(api_urls)


# ================================================ Profile ==================================================

@api_view(['GET', 'PUT'])
# @permission_classes((IsAuthenticated,))
def profile(request):
    user = User.objects.get(id=request.user.id)

    if request.method == 'GET':
        serializer = UserProfileSerializer(instance=user, many=False)
        return Response(serializer.data, status=201)
    else:
        return Response(serializer.errors, status=400)

# ================================================ Profile ==================================================