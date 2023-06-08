from rest_framework.viewsets import  ModelViewSet
from .serializer import TransactionSerializer
from .models import Transferencia
from rest_framework.permissions import IsAuthenticated

class TransactionView(ModelViewSet):
    serializer_class =  TransactionSerializer
    queryset = Transferencia.objects.all()
    permission_classes = [IsAuthenticated]  # Agregar IsAuthenticated como permiso
