from django.urls import path
from .views import send_to_email
from .views import RegisterView, LoginView, LogoutView, UserView

urlpatterns = [
    path('login/verify/', send_to_email, name='sending to email'),
    path('user/', UserView.as_view(), name='get correct user'),
    path('register/', RegisterView.as_view(), name='register to the system'),
    path('login/', LoginView.as_view(), name='authorization'),
    path('logout/', LogoutView.as_view(), name='log out!')
]