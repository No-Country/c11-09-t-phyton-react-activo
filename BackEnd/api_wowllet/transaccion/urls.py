from django.urls import path,include
from rest_framework import routers
from .views import TransactionView

router = routers.DefaultRouter()
router.register(r'transferencia',TransactionView,'transaction')
urlpatterns = [
    path('v1/',include(router.urls)),
]
