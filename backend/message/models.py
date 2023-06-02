from django.db import models

# Create your models here.
class Message(models.Model):
    author = models.CharField(max_length=250)
    email = models.EmailField(max_length=50)
    message = models.TextField(max_length=5000)



class NewsLetter(models.Model):
    email = models.EmailField(max_length=50)
    consent = models.BooleanField(default=False)