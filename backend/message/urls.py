from django.urls import path
from .views import SendEmail, SendMessage, HomeView

urlpatterns = [
    path('', HomeView.as_view(), name='home'),
    path('letter/', SendEmail.as_view(), name='email'),
    path('contact/', SendMessage.as_view(), name='contact'),
]
