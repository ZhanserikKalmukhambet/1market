from django.shortcuts import render

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status

from shop.models import WarehouseItem
from .models import Order, OrderItem

from .serializers import OrderSerializer, OrderItemSerializer


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    def purchase_orderitems_in_order(self, request, order_id):  # aka: purchase_orderitems_in_cart
        try:
            last_order = Order.objects.get(id=order_id)
        except Order.DoesNotExist as e:
            return Response({'Error in getting last_order': str(e)}, status=status.HTTP_400_BAD_REQUEST)

        serializer = OrderSerializer(instance=last_order, data=request.data)
        if serializer.is_valid():
            serializer.save()

            # print(f"\n\n\n{serializer.data}\n\n\n")
            new_order = Order(user_id=serializer.data["user"])
            new_order.save()

            # print(f"\n\n\n{new_order}\n\n\n")

            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class OrderItemViewSet(viewsets.ModelViewSet):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer

    def get_order_items_in_cart(self, request, user_id):
        queryset = OrderItem.objects.filter(order__user_id=user_id)
        serializer = OrderItemSerializer(queryset, many=True)
        return Response(serializer.data)

    def get_user_orders(self, request, user_id):
        queryset = Order.objects.filter(user_id=user_id)
        serializer = OrderSerializer(queryset, many=True)
        return Response(serializer.data)

    def get_user_order_orderitems(self, request, order_id):
        # user_id = request.user.id # ? permissions
        queryset = OrderItem.objects.filter(order_id=order_id)
        serializer = OrderItemSerializer(queryset, many=True)
        return Response(serializer.data)

    def delete_order_item_from_order(self, request, orderitem_id):  # aka: delete_orderitem_from_cart
        try:
            deleting_order_item = OrderItem.objects.get(id=orderitem_id)
        except OrderItem.DoesNotExist as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

        deleting_order_item.warehouse_item.quantity += deleting_order_item.quantity
        deleting_order_item.warehouse_item.save()

        deleting_order_item.delete()
        return Response({'message': 'deleted'}, status=status.HTTP_204_NO_CONTENT)

    def add_order_item_to_order(self, request):  # aka: add_product_to_cart
        serializer = OrderItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            warehouse_item_id = serializer.data["warehouse_item"]
            warehouse_item = WarehouseItem.objects.get(id=warehouse_item_id)
            order_item_quantity = serializer.data["quantity"]

            warehouse_item.quantity = warehouse_item.quantity - order_item_quantity
            warehouse_item.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
