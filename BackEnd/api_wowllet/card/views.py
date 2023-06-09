from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .models import  CreditCard,Debit
from  .serializer import CreditCardSerializer,UpdateCreditCardSerializer,UpdateDebitSerializer,DebitSerializer
from .utils import  update_card,get_card
from rest_framework.viewsets import  ModelViewSet

# Create your views here.

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getCredit(request):
    user = request.user
    return get_card(CreditCardSerializer,user.creditcard)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateCreditCard(request, id):
    return update_card(request,CreditCard,UpdateCreditCardSerializer,id)
    
@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateDebit(request, id):
    return update_card(request,Debit,UpdateDebitSerializer,id)
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getDebit(request):
    user = request.user
    return get_card(DebitSerializer,user.debit)
