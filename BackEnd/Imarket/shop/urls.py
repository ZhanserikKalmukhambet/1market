from rest_framework import routers

from .views import ShopViewSet, WarehouseViewSet

urlpatterns = [
]

r = routers.DefaultRouter()

r.register(r'warehouse_items', WarehouseViewSet, basename='warehouse_item')
r.register(r'shops', ShopViewSet, basename='shop')

urlpatterns += r.urls
