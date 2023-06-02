from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from  .serializer import CreditCardSerializer

# Create your views here.

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getCredit(request):
    user = request.user
    notes = user.creditcard_set.all()
    serializer = CreditCardSerializer(notes, many=True)
    return Response(serializer.data)