from django.db import models
from card.models import Debit
from django.dispatch import receiver
from django.db.models.signals import pre_save,post_save
from django.core.exceptions import ValidationError

class Transferencia(models.Model):
    card_user = models.IntegerField()
    card_user_to_transfer = models.IntegerField()
    concept = models.CharField(max_length=255)
    quantity = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateTimeField(auto_now_add=True)
    # Otros campos que consideres necesarios

    def __str__(self):
        return f"Transferencia desde el cvv {self.card_user} al cvv {self.card_user_to_transfer}"

@receiver(pre_save, sender=Transferencia)
def transfer_validation(sender,instance,**kwargs):
    if instance.card_user == instance.card_user_to_transfer:
        raise ValidationError("No se puede transferirte a ti mismo")
    
@receiver(post_save, sender=Transferencia)
def transfer_validation(sender,instance,created,**kwargs):
    if created:
        debit_account_user = Debit.objects.get(numero_tarjeta=instance.card_user)
        debit_account_user_to_transfer = Debit.objects.get(numero_tarjeta=instance.card_user_to_transfer)

        if debit_account_user.nombre_titular != None and debit_account_user_to_transfer.nombre_titular != None:
            if debit_account_user.saldo_actual >= instance.quantity:              
                if instance.quantity >= 1:  
                    debit_account_user.saldo_actual -= instance.quantity
                    debit_account_user_to_transfer.saldo_actual += instance.quantity
                    
                    debit_account_user.save()
                    debit_account_user_to_transfer.save()
                    
                else:
                    raise ValidationError("No se puede transferir cantidad menor a 1 peso")
            else:
                raise ValidationError("No tienes suficiente dinero")
        else:
            raise ValidationError("No existe tal cuenta")