from  rest_framework import serializers
from .models import Transferencia

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transferencia
        fields = ('card_user','card_user_to_transfer','concept','quantity',)
        