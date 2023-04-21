from django.core.exceptions import ValidationError
from django.db import models


def validate_rating(value):
    if 0 <= value <= 5:
        return value
    else:
        raise ValidationError("This field accepts rating between 0 and 5")


class Category(models.Model):
    name = models.CharField(max_length=255, verbose_name='Name', unique=True)
    image = models.ImageField(upload_to='images/%Y/%m/%d', null=True, blank=True, verbose_name='Category Image')

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=255, verbose_name='Name', unique=True)
    main_image = models.ImageField(upload_to='images/%Y/%m/%d', null=True, blank=True, verbose_name='Product Main Image')
    is_active = models.BooleanField(default=True, verbose_name='Is Active ?')
    description = models.TextField(null=True, verbose_name='Description')
    rating = models.FloatField(null=True, validators=[validate_rating])
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True, related_name='products')

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'
        ordering = ('-rating', )

    def __str__(self):
        return f"{self.name} ({self.category})"


class ProductImage(models.Model):
    image = models.ImageField(upload_to='images/%Y/%m/%d', null=True, blank=True, verbose_name='Image')

    product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True, related_name='product_images')

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Product Image'
        verbose_name_plural = 'Product Images'
        ordering = ('-created_at',)

    def __str__(self):
        return f'Image: {self.product.name}'
