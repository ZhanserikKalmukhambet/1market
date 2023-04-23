from django.urls import path

from rest_framework import routers

from .views import OrderViewSet, OrderItemViewSet

urlpatterns = [
]

r = routers.DefaultRouter()

r.register(r'orders', OrderViewSet)
r.register(r'order_items', OrderItemViewSet)

urlpatterns += r.urls
