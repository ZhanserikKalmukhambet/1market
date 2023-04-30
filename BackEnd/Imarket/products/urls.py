from .views import ProductImageViewSet, CategoryViewSet, ProductViewSet
from django.urls import path

from rest_framework import routers

urlpatterns = [
    path('categories/<int:category_id>/products/',
         ProductViewSet.as_view({'get': 'get_category_products'}), name='list of category products'),
    path('products/rating/<int:min>/',
         ProductViewSet.as_view({'get': 'get_products_min_rating'}), name='products with minimum rate'),
    path('products/<int:product_id>/put_rating/<int:new_rating>/',
         ProductViewSet.as_view({'get': 'put_rating_to_product'}), name='rate product'),

]

r = routers.DefaultRouter()

r.register(r'products', ProductViewSet)
r.register(r'product_images', ProductImageViewSet)
r.register(r'categories', CategoryViewSet)

urlpatterns += r.urls
