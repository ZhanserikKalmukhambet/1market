import datetime

from django.db import models
from users.models import User
from shop.models import WarehouseItem
from users.choices import Role


class Order(models.Model):
    user = models.ForeignKey(User,
                             on_delete=models.CASCADE,
                             null=True,
                             limit_choices_to={'user_type': Role.CUSTOMER})
    completed = models.BooleanField(default=False)
    delivery_date = models.DateTimeField(verbose_name='Delivery Date', default=datetime.datetime.now)
    delivery_address = models.CharField(max_length=255, verbose_name='Address of deliver', default="address")
    delivery_price = models.FloatField(default=0)

    def __str__(self):
        return f'customer: {self.user} - order_id: {self.pk}'


class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, null=True)
    warehouse_item = models.OneToOneField(WarehouseItem, on_delete=models.CASCADE, null=True)
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f'{self.warehouse_item}'
