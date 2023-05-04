from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from . import settings
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

# swagger details
schema_view = get_schema_view(
   openapi.Info(
      title="1market API",
      default_version='v1',
      contact=openapi.Contact(email="zkalmukhambet@mail.ru"),
   ),
   public=True,
)

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),

    path('api/', include('products.urls')),
    path('api/', include('orders.urls')),
    path('api/', include('shop.urls')),
    path('api/', include('users.urls')),

    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]

# storing images
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
