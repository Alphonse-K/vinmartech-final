from django.urls import path
from .views import SendMessage, SendEmail

urlpatterns = [
    path('', SendEmail.as_view(), name='email'),
    path('contact/', SendMessage.as_view(), name='home'),
]