from django.shortcuts import render
from rest_framework import viewsets
from .models import User
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django.core.mail import send_mail
from django.conf import Settings
from django.views.decorators.csrf import csrf_exempt


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


@csrf_exempt
def send_to_email(request):
    if request.method == 'POST':
        
        email = request.POST['email']
        message = request.POST['message']
    
        send_mail(
            subject='Verification',
            message=message,
            from_email='settings.EMAIL_HOST_USER',
            recipient_list=[email, ],
            fail_silently=False
        )
    
    return render(request, 'index.html')