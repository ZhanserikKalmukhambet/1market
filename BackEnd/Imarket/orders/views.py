from django.shortcuts import render

from rest_framework import viewsets
from rest_framework.response import Response

from .models import Order, OrderItem

from .serializers import OrderSerializer, OrderItemSerializer

from rest_framework.permissions import IsAuthenticatedOrReadOnly


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class OrderItemViewSet(viewsets.ModelViewSet):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get_order_items_in_cart(self, request, user_id):
        queryset = OrderItem.objects.filter(order__user_id=user_id)
        serializer = OrderItemSerializer(queryset, many=True)
        return Response(serializer.data)

    def get_user_orders(self, request, user_id):
        queryset = Order.objects.filter(user_id=user_id)
        serializer = OrderSerializer(queryset, many=True)
        return Response(serializer.data)
