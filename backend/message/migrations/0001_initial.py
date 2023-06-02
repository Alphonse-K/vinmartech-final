# Generated by Django 4.2.1 on 2023-06-02 11:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('author', models.CharField(max_length=250)),
                ('email', models.EmailField(max_length=50)),
                ('message', models.TextField(max_length=5000)),
            ],
        ),
    ]
