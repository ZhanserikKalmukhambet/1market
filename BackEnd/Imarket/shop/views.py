from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response

from .models import Shop, WarehouseItem
from .serializers import ShopSerializer, WarehouseItemSerializer


class ShopViewSet(viewsets.ModelViewSet):
    queryset = Shop.objects.all()
    serializer_class = ShopSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class WarehouseViewSet(viewsets.ModelViewSet):
    queryset = WarehouseItem.objects.all()
    serializer_class = WarehouseItemSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


    def get_warehouse_items_min_max_price(self, request, min=0, max=1e9):
        queryset = WarehouseItem.objects.filter(price__range=(min, max))
        serializer = WarehouseItemSerializer(queryset, many=True)
        return Response(serializer.data)


    def get_shop_warehouse_items(self, request, shop_id):
        queryset = WarehouseItem.objects.filter(shop_id=shop_id)
        serializer = WarehouseItemSerializer(queryset, many=True)
        return Response(serializer.data)

    def get_warehouse_items_of_product(self, request, product_id):
        queryset = WarehouseItem.objects.filter(product_id=product_id)
        serializer = WarehouseItemSerializer(queryset, many=True)
        return Response(serializer.data)
