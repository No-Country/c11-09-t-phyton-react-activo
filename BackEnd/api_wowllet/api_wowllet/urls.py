from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('auth.urls')),
    path('api-profile/', include('profile_api.urls')),
    path('api-cards/', include('card.urls')),
    path('api-transaccion/', include('transaccion.urls')),

]
