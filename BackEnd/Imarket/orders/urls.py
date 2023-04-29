from django.urls import path

from rest_framework import routers

from .views import OrderViewSet, OrderItemViewSet

urlpatterns = [
    path('users/<int:user_id>/cart_order_items/',
         OrderItemViewSet.as_view({'get': 'get_order_items_in_cart'}), name='get products in cart'),
    path('users/<int:user_id>/orders/',
         OrderItemViewSet.as_view({'get': 'get_user_orders'}), name='get products in cart'),
]

r = routers.DefaultRouter()

r.register(r'orders', OrderViewSet)
r.register(r'order_items', OrderItemViewSet)

urlpatterns += r.urls
