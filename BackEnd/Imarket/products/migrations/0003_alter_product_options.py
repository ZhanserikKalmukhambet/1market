# Generated by Django 4.2 on 2023-04-30 12:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_product_rate_cnt_alter_product_rating'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='product',
            options={'verbose_name': 'Product', 'verbose_name_plural': 'Products'},
        ),
    ]