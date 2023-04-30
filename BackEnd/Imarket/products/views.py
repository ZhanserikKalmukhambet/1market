from rest_framework import viewsets, status
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

    def put_rating_to_product(self, request, product_id, new_rating) -> int:
        product = Product.objects.get(id=product_id)
        product.rate_cnt = product.rate_cnt + 1
        product.rating = (product.rating + new_rating) / (product.rate_cnt)
        product.save()
        return Response(data=product.rating, status=status.HTTP_200_OK)