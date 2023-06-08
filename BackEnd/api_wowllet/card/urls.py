from django.urls import path
from . import views
urlpatterns = [
    path('v1/credit', views.getCredit),
    path('v1/debit', views.getDebit),
    path('v1/credit-update/<int:id>', views.updateCreditCard),
    path('v1/debit-update/<int:id>', views.updateDebit),

]