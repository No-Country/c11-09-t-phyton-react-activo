from django.contrib import admin
from .models import CreditCard,Debit
# Register your models here.
admin.site.register(CreditCard)
admin.site.register(Debit)