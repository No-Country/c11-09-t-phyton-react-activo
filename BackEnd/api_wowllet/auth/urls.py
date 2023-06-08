from django.urls import path,include
from .views import MyTokenObtainPairView,UserView,RegistrationView
from rest_framework import routers
router = routers.SimpleRouter()
router.register('users',UserView)
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
urlpatterns = [
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('accounts/register', RegistrationView.as_view(), name='register'),
    path('v1/',include(router.urls))
]
