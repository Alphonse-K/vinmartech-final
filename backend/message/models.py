from django.db import models

# Create your models here.
class Message(models.Model):
    author = models.CharField(max_length=250)
    email = models.EmailField(max_length=50)
    message = models.TextField(max_length=5000)

    def __str__(self):
        return self.author



class NewsLetter(models.Model):
    email = models.EmailField(max_length=50)
    consent = models.BooleanField(default=False)

    def __str__(self):
        return self.email



