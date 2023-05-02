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
        return f'order_id: {self.pk} || ' \
               f'{self.completed}, {self.delivery_date}, {self.delivery_address}, {self.delivery_price} || ' \
               f'----- {self.user}'


class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, null=True)
    warehouse_item = models.ForeignKey(WarehouseItem, on_delete=models.PROTECT, null=True)
    quantity = models.PositiveIntegerField(default=1)
    def __str__(self):
<<<<<<< HEAD
        return f'{self.warehouse_item}'
=======
        return f'order_item_id: {self.pk} & order_item_cnt: {self.quantity} ' \
               f'--- wh: {self.warehouse_item.product.name} & wh_cnt: {self.warehouse_item.quantity} ' \
               f'--- order: {self.order}'
>>>>>>> a4c3d44d9b32b12ccd3beee35967a2bf945e239c
