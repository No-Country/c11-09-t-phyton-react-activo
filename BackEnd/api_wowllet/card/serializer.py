from rest_framework.serializers import ModelSerializer
from .models import CreditCard,Debit


class CreditCardSerializer(ModelSerializer):
    class Meta:
        model = CreditCard
        fields = '__all__'
        

class DebitSerializer(ModelSerializer):
    class Meta:
        model = Debit
        fields = '__all__'
        
class UpdateCreditCardSerializer(ModelSerializer):
    class Meta:
        model = CreditCard
        fields = ('nombre_titular',)
        
      
class UpdateDebitSerializer(ModelSerializer):
    class Meta:
        model = Debit
        fields = ('nombre_titular',)  
