from rest_framework.viewsets import  ModelViewSet
from .serializer import TransactionSerializer,HistoryTransactionsSerializer
from .models import Transferencia,Transaction
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
class TransactionView(ModelViewSet):
    serializer_class =  TransactionSerializer
    queryset = Transferencia.objects.all()
    permission_classes = [IsAuthenticated]  # Agregar IsAuthenticated como permiso
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def transactionsUser(request):
    user = request.user
    if Transaction.objects.filter(card=user.debit).exists():
        transaction = Transaction.objects.get(card=user.debit)
        serializer = HistoryTransactionsSerializer(transaction)
        return Response(serializer.data)
    return Response("No transactions")
    