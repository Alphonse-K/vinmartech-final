from django.contrib import admin
from .models import Message, NewsLetter

# Register your models here.
admin.site.register(Message)
admin.site.register(NewsLetter)