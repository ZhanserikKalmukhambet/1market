from rest_framework import viewsets
from rest_framework.response import Response

from .models import Category, Product, ProductImage
from .serializers import ProductSerializer, CategorySerializer, ProductImageSerializer


class ProductImageViewSet(viewsets.ModelViewSet):
    queryset = ProductImage.objects.all()
    serializer_class = ProductImageSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get_category_products(self, request, category_id):
        queryset = Product.objects.all().filter(category_id=category_id)
        serializer = CategorySerializer(queryset, many=True)
        return Response(serializer.data)

    def get_products_min_rating(self, request, min):
        queryset = Product.objects.all().filter(rating__gte=min)
        serializer = CategorySerializer(queryset, many=True)
        return Response(serializer.data)

