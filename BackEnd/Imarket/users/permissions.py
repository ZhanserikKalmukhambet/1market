from rest_framework import permissions

from users.choices import Role


class IsSeller(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.user and request.user.is_authenticated and request.user.user_type == Role.SELLER:
            return True
        return False


class IsCustomer(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.user and request.user.is_authenticated and request.user.user_type == Role.CUSTOMER:
            return True
        return False


class IsAdminOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True

        return request.user.is_authenticated and request.user and request.user.is_staff


class IsOwner(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.user.is_authenticated:
            return True

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True

        return request.user == obj.seller

