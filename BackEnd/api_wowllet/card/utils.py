from datetime import date, timedelta
from rest_framework.response import Response
from rest_framework import status

def create_card(model,instance):
    date_now = date.today()
    date_expired = date_now + timedelta(days=365 * 5)
    last_card = model.objects.last() if model.objects.all().count() > 0 else None
    credit_card = model.objects.create(user=instance,fecha_vencimiento=date_expired,saldo_actual=0)

    if model.objects.all().count() == 1:
        credit_card.numero_tarjeta = 1
        credit_card.cvv = 1
        credit_card.save()
    else:
        credit_card.numero_tarjeta = last_card.numero_tarjeta + 1   
        credit_card.cvv = last_card.cvv + 1
        credit_card.save()
        
def update_card(request,model,serializer_card,id):
    try:
        card = model.objects.get(id=id)
    except card.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    name_title = request.data.get('nombre_titular')

    card.nombre_titular = name_title
    card.save()

    serializer = serializer_card(card)
    return Response(serializer.data, status=status.HTTP_200_OK)


def get_card(serializer_card,card):
    serializer = serializer_card(card)
    return Response(serializer.data)