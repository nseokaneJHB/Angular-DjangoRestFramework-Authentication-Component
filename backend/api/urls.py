from django.urls import path

from rest_framework.authtoken import views as auth
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from . import views


urlpatterns = [
	# Get Json Web Token
	path("json-token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("json-token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),

	# Get the Token
    path("token/", views.CustomAuthToken.as_view(), name="token"),

	# Register
	path("register/", views.register, name="register"),

	# Home
	path("", views.api_overview, name="home"),

	# User Profile
	path("profile/", views.profile, name="profile"),
	path("user/", views.user, name="user"),
]