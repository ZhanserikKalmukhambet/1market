from django.db import models


class Order(models.Model):
    user = models.OneToOneField(to='users.User', on_delete=models.CASCADE)
    completed = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.user.verbose_name} - {self.completed}'


class OrderItem(models.Model):
    warehouse_item = models.OneToOneField(to='shop.WarehouseItem', on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    delivery_date = models.DateTimeField(verbose_name='Delivery Date')
    delivery_address = models.CharField(max_length=255, verbose_name='Address of deliver')
    delivery_price = models.FloatField(default=0)
    order = models.ForeignKey(Order, on_delete=models.CASCADE, verbose_name='Order Details', related_name='order_items',)

    def __str__(self):
        return f'{self.id} ({self.warehouse_item.product.name}) --> {self.warehouse_item.price} ({self.warehouse_item.shop.address})'

    def get_price(self):
        return self.quantity * self.warehouse_item.price
