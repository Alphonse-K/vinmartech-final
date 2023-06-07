from django.test import TestCase
from .models import Message, NewsLetter


# Create your tests here.
class SendEmailTEstCase(TestCase):

    def setUp(self):
         NewsLetter.objects.create(email='kaman@gmail.com', consent=True).save()
         NewsLetter.objects.create(email='maiga@gmail.com', consent=True).save()
         

    def test_get_emails(self):
        get_items = NewsLetter.objects.all()
        bool = len(get_items) == 2
        self.assertTrue(bool, "test did not pass!")

    def test_text_content(self):
        get_item = NewsLetter.objects.get(id=1)
        excepted_email = f'{get_item.email}'
        expected_consent= get_item.consent
        self.assertEqual(excepted_email, 'kaman@gmail.com')
        self.assertTrue(expected_consent, 'test did not pass!')



class SendMessageTEstCase(TestCase):


    def setUp(self):
         self.message1 = Message.objects.create(author='Alphonse', email='kaman@gmail.com', message='I love all of you!')
         self.message1.save()

    def test_get_emails(self):
        get_items = Message.objects.all()
        bool = len(get_items) == 1
        self.assertTrue(bool, "test did not pass!")

    def test_send_message(self):
        get_item = Message.objects.get(id=1)
        expected_author = f'{get_item.author}'
        expected_email = f'{get_item.email}'
        expected_message= f'{get_item.message}'
        self.assertEqual(expected_author,'Alphonse')
        self.assertEqual(expected_email,'kaman@gmail.com')
        self.assertEqual(expected_message,'I love all of you!')
