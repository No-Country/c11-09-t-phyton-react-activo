from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save

# Create your models here.
class Profile(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    username = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    dni = models.CharField(max_length=100,blank=True, null=True)
    telefono = models.IntegerField(blank=True, null=True)
    direccion = models.CharField(max_length=255,blank=True, null=True)

    def __str__(self) -> str:
        return f'Perfil de {self.user.username}'
    
    def update_values(self):
        self.user.username = self.username
        self.user.email = self.email
        
        self.user.save()


@receiver(post_save, sender=User)
def create_profile(sender, instance,created,**kwargs):
    if created:
        Profile.objects.create(user=instance,username=instance.username,email=instance.email)

@receiver(post_save, sender=Profile)
def update_profile(sender, instance,created,**kwargs):
    instance.update_values()