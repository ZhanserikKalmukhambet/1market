import datetime
import random
import string

import jwt
from django.core.exceptions import ValidationError
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.exceptions import AuthenticationFailed

from .models import User
from .serializers import UserSerializer
from django.core.mail import send_mail
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def send_to_email(request):
    if request.method == 'POST':
        email = request.POST['email']

        send_mail(
            subject='Verification',
            message=f'Verification code for registration : {RegisterView.random_gen_code}',
            from_email='settings.EMAIL_HOST_USER',
            recipient_list=[email, ],
            fail_silently=False
        )

    return render(request, 'index.html')


class UserView(APIView):
    def get(self, request):
        token = request.COOKIES.get('token')

        if not token:
            return Response({'detail': 'Unauthentificated!'})

        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            return Response({'detail': 'Unauthentificated!'})

        user = User.objects.filter(id=payload['id']).first()
        serializer = UserSerializer(user)

        return Response(serializer.data)


class RegisterView(APIView):
    random_gen_code = ''.join(random.choice(string.digits) for i in range(6))

    def post(self, request):
        code = request['code']

        if code != RegisterView.random_gen_code:
            raise ValidationError("Verify code doesn't satisfy")

        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class LoginView(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']

        user = User.objects.all().filter(email=email).first()

        if user is None:
            raise AuthenticationFailed('User not found!')

        if not user.check_password(password):
            raise AuthenticationFailed('Password is incorrect!')

        payload = {
            'id': user.id,
            'email': user.email,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'secret', algorithm='HS256')

        response = Response(token)

        return response


class LogoutView(APIView):
    def post(self, request):
        response = Response()

        response.delete_cookie(key='token')

        response.data = {
            'data': 'Logged out!'
        }

        return response
