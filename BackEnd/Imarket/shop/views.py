from rest_framework import viewsets
from rest_framework.response import Response

from .models import Shop, WarehouseItem
from .serializers import ShopSerializer, WarehouseItemSerializer


class ShopViewSet(viewsets.ModelViewSet):
    queryset = Shop.objects.all()
    serializer_class = ShopSerializer


class WarehouseViewSet(viewsets.ModelViewSet):
    queryset = WarehouseItem.objects.all()
    serializer_class = WarehouseItemSerializer

    def get_warehouse_items_min_max_price(self, request, min=0, max=1e9):
        queryset = WarehouseItem.objects.filter(price__range=(min, max))
        serializer = WarehouseItemSerializer(queryset, many=True)
        return Response(serializer.data)

    def get_warehouse_items_of_shop(self, request, shop_id):
        queryset = WarehouseItem.objects.filter(shop_id=shop_id)
        serializer = WarehouseItemSerializer(queryset, many=True)
        return Response(serializer.data)
