from django.db import models
from users.models import User
from shop.models import WarehouseItem
from users.choices import Role


class Order(models.Model):
    user = models.OneToOneField(User,
                                on_delete=models.CASCADE,
                                null=True,
                                limit_choices_to={'user_type': Role.CUSTOMER})
    completed = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.user.name} - {self.completed}'


class OrderItem(models.Model):
    warehouse_item = models.OneToOneField(WarehouseItem, on_delete=models.CASCADE, null=True)
    quantity = models.PositiveIntegerField(default=1)
    delivery_date = models.DateTimeField(verbose_name='Delivery Date')
    delivery_address = models.CharField(max_length=255, verbose_name='Address of deliver')
    delivery_price = models.FloatField(default=0)
    order = models.ForeignKey(Order, on_delete=models.CASCADE, verbose_name='Order Details', related_name='order_items',)

