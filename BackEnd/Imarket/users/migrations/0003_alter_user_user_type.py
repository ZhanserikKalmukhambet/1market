# Generated by Django 4.2 on 2023-04-24 15:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_alter_user_options_alter_user_user_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='user_type',
            field=models.CharField(choices=[('Admin', 'Admin'), ('Seller', 'Seller'), ('Customer', 'Customer')], max_length=10),
        ),
    ]