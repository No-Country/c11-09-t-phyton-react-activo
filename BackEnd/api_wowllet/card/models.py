from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class CreditCard(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    nombre_titular = models.CharField(max_length=200)
    cvv = models.IntegerField()
    numero_tarjeta = models.IntegerField()
    fecha_vencimiento = models.DateField()

    def __str__(self):
        return f'Tarjeta de credito de {self.user.username}'