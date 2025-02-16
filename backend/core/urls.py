from django.urls import path
from core import views  # Ensure this is correct

urlpatterns = [
    path('', views.home, name='home'),
]