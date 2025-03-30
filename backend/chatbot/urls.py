from django.urls import path
from .views import chat_endpoint  # Import your chatbot view

urlpatterns = [
    path('chat/', chat_endpoint, name='chat'),  # Add this route
]
