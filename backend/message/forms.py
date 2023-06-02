from django import forms
from .models import Message, NewsLetter

class MessageForm(forms.ModelForm):
    class Meta:
        message = Message
        fields = ['author', 'email', 'message']


class NewsLetterForm(forms.ModelForm):
    class Meta:
        letter = NewsLetter
        fields = ['email', 'consent']

