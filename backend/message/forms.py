# from django import forms
from rest_framework import serializers
from .models import Message, NewsLetter

class MessageForm(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ['author', 'email', 'message']


class NewsLetterForm(serializers.ModelSerializer):
    class Meta:
        model = NewsLetter
        fields = ('email', 'consent')

