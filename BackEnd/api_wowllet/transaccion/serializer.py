from  rest_framework import serializers
from .models import Transferencia,Transaction

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transferencia
        fields = ('card_user','card_user_to_transfer','concept','quantity',)
        
        

class HistoryTransactionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = ('card','transactions_user',)