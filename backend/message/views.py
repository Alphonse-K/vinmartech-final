from .forms import MessageForm, NewsLetterForm
from .models import Message, NewsLetter
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


# Create your views here.
class SendMessage(APIView):

    def get(self, request, *args, **kwargs):
        queryset = Message.objects.all()
        serializer = MessageForm(queryset, many=True)
        return Response(serializer.data)

    def post(elf, request, *args, **kwargs):
        serializer = MessageForm(data=request.data)
        if serializer.is_valid():
            serializer.save();
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
    

class SendEmail(APIView):
    
    def get(self, request, *args, **kwargs):
        queryset = NewsLetter.objects.all()
        serializer = NewsLetterForm(queryset, many=True)
        return Response(serializer.data)

    def post(elf, request, *args, **kwargs):
        serializer = NewsLetterForm(data=request.data)
        if serializer.is_valid():
            serializer.save();
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)


class HomeView(APIView):
    
    def get(self, request, *args, **kwargs):
        return Response("welcome home!")

