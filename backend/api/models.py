  
from django.db import models
from django.contrib.auth.models import User

from rest_framework.authtoken.models import Token
from django.db.models.signals import post_save
from django.dispatch import receiver


@receiver(post_save, sender=User)
def create_auth_token(sender, instance, created, **kwargs):
    if created:
        Token.objects.create(user=instance)


class ProfileModel(models.Model):
	account = models.OneToOneField(User, verbose_name="Username", on_delete=models.CASCADE)
	avatar = models.URLField(verbose_name="Profile picture link", max_length=1000, blank=True, error_messages = {"max_length": "Please attach a link with less than 1000 characters."})
	bio = models.TextField(verbose_name="Boigraphy", blank=True)
	phone = models.CharField(verbose_name="Phone number", max_length=10, blank=True, error_messages = {"max_length": "Please make sure it's 10 numbers."})
	date_created = models.DateTimeField(verbose_name="Created", auto_now_add=True)

	def __str__(self):
		return str(self.user)

	@receiver(post_save, sender=User)
	def create_profile(sender, instance, created, **kwargs):
		if created:
			ProfileModel.objects.create(account=instance)