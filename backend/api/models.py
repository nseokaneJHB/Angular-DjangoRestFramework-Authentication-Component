from django.db import models

from django.contrib.auth.models import User

from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

@receiver(post_save, sender=User)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(account=instance)

class profile(models.Model):
	account = models.OneToOneField(User, verbose_name="Account", on_delete=models.CASCADE)
	thumbnail = models.URLField(verbose_name="Image Url", max_length=200)

	def __str__(self):
		return self.account
		
