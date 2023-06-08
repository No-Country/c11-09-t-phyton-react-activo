from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save
from .utils import  create_card
# Create your models here.
class CreditCard(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    nombre_titular = models.CharField(max_length=200,blank=True,null=True)
    cvv = models.IntegerField(blank=True,null=True)
    numero_tarjeta = models.IntegerField(blank=True,null=True)
    saldo_actual = models.IntegerField()
    fecha_vencimiento = models.DateField()
    
    def __str__(self):
        return f'Tarjeta de credito de {self.user.username}'
    

class Debit(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    nombre_titular = models.CharField(max_length=200,blank=True,null=True)
    cvv = models.IntegerField(blank=True,null=True)
    numero_tarjeta = models.IntegerField(blank=True,null=True)
    saldo_actual = models.IntegerField()
    fecha_vencimiento = models.DateField()
    
    def __str__(self):
        return f'Tarjeta de debito de {self.user.username}'


@receiver(post_save, sender=User)
def create_creditcard(sender, instance,created,**kwargs):
    if created:
        create_card(CreditCard,instance)
        
@receiver(post_save, sender=User)
def create_debit(sender, instance,created,**kwargs):
    if created:
        create_card(Debit,instance)


