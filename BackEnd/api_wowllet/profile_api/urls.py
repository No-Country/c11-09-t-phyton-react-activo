from django.urls import path,include
from rest_framework import  routers
from .views import ProfileView
router = routers.SimpleRouter()
router.register('profile', ProfileView)

urlpatterns = [
    path('v1/',include(router.urls) ),
]
