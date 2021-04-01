from django.urls import path

from rest_framework.authtoken import views as auth
from . import views


urlpatterns = [
	# Get the Token
    path("tokenize/", views.CustomAuthToken.as_view(), name="token"),

	# Home
	path("", views.api_overview, name="home"),

	# Profile
	path("profile/", views.profile, name="profile"),
]