# Generated by Django 4.2 on 2023-04-28 12:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_alter_user_options_alter_user_birth_date_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='user_type',
            field=models.CharField(choices=[('Seller', 'Seller'), ('Customer', 'Customer'), ('Admin', 'Admin')], max_length=10),
        ),
    ]