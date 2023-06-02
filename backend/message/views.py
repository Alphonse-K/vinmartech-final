from django.http import HttpRequest, HttpResponse
from django.views.generic import CreateView, ListView
from .forms import MessageForm, NewsLetterForm

# Create your views here.
class SendMessage(CreateView):
    model = MessageForm
    def get(self, *args, **kwargs):
        return HttpResponse('Alphonse is back!')
    
class SendEmail(CreateView):
    model = NewsLetterForm
    def get(self, *args, **kwargs):
        return HttpResponse('how are you boy')