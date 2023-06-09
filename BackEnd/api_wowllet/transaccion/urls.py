from django.urls import path,include
from rest_framework import routers
from .views import TransactionView
from . import views
router = routers.DefaultRouter()
router.register(r'transferencia',TransactionView,'transaction')
urlpatterns = [
    path('v1/',include(router.urls)),
    path('v1/transactions_user',views.transactionsUser),

]
