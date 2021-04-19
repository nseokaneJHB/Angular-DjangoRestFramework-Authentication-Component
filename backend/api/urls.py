from django.urls import path

from rest_framework.authtoken import views as auth
from . import views


urlpatterns = [
	# Get the Token
    path("tokenize/", views.CustomAuthToken.as_view(), name="token"),

	# Register
	path("register/", views.register, name="register"),

	# Home
	path("", views.api_overview, name="home"),

	# User Profile
	path("profile/", views.profile, name="profile"),
	path("user/", views.user, name="user"),
]