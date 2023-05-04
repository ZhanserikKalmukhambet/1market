from rest_framework import permissions


class IsSeller(permissions.BasePermission):
    def has_permission(self, request, view):
        print("\n\n\n----------has permission------\n\n\n")
        if request.user.is_authenticated:
            print("======True=====")
            return True
        print("Request.user: ", request.user)
        print("Request.auth: ", request.auth)

        print("======False=====")
        return False

    def has_object_permission(self, request, view, obj):
        # print("\n\n\n----------has object permission------\n\n\n")
        if obj.seller == request.user:
            return True
        return False



class IsCustomer(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.user.is_authenticated:
            return True
        return False

    def has_object_permission(self, request, view, obj):
        if obj.customer == request.user:
            return True
        return False
