from rest_framework import permissions


class IsSeller(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.user.is_authenticated:
            return True
<<<<<<< HEAD
        return False

    def has_object_permission(self, request, view, obj):
        if obj.seller == request.user:
            return True
        return False

=======

    def has_object_permission(self, request, view, obj):
        if request.user.role == 'seller':
            return True

        return False
>>>>>>> 75421d2bd4a73571560359ba44ac38b7d0ffca07


class IsCustomer(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.user.is_authenticated:
            return True
<<<<<<< HEAD
        return False

    def has_object_permission(self, request, view, obj):
        if obj.customer == request.user:
            return True
        return False
=======

    def has_object_permission(self, request, view, obj):
        if request.user.role == 'customer':
            return obj.customer == request.user

        return False
>>>>>>> 75421d2bd4a73571560359ba44ac38b7d0ffca07
