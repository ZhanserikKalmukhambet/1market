import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BasketItem, Image, Order, OrderItem, Price, Product, Shop, SubCategoryBack} from "../../models";



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  BASE_URL = "http://127.0.0.1:8000/api";

  constructor(private client: HttpClient) { }


  getCategoryProducts(catid: number): Observable<Product[]> {
    return this.client.get<Product[]> (
      `${this.BASE_URL}/categories/${catid}/products/`
    )
  }
  // path('categories/<int:category_id>/products/',
  // ProductViewSet.as_view({'get': 'get_category_products'}), name='list of category products'),
  getMinPrice(product_id: number): Observable<Price> {
    return this.client.get<Price> (
      `${this.BASE_URL}/products/${product_id}/avg_price/`
    )
  }

  getCategorySubcategories(catid: number): Observable<SubCategoryBack[]> {
    return this.client.get<SubCategoryBack[]> (
      `${this.BASE_URL}/categories/${catid}/subcategories/`
    )
  }

  getItemsOfBasket(u_id: number): Observable<BasketItem[]> {
    return this.client.get<BasketItem[]> (
      `${this.BASE_URL}/users/${u_id}/cart_order_items/`
    )
  }

  getSubcategoryProducts(catid: number, subcatid: number): Observable<Product[]> {
    return this.client.get<Product[]> (
      `${this.BASE_URL}/categories/${catid}/subcategories/${subcatid}/products/`
    )
  }
  getProductsOfShop(s_id: number): Observable<Product[]> {
    return this.client.get<Product[]> (
      `${this.BASE_URL}/shops/${s_id}/products/`
    )
  }
  getShopsOfCategory(cat_id: number): Observable<Shop[]> {
    return this.client.get<Shop[]> (
      `${this.BASE_URL}/categories/${cat_id}/shops/`
    )
  }
  getShopsOfSubCategory(subCat_id: number): Observable<Shop[]> {
    return this.client.get<Shop[]> (
      `${this.BASE_URL}/subcategories/${subCat_id}/shops/`
    )
  }


  getProductsMinRate(minRate: number): Observable<Product[]> {
    return this.client.get<Product[]> (
      `${this.BASE_URL}/products/rating/${minRate}/`
    )
  }


  putRatingToProduct(productID: number, minRate: number): Observable<number> {
    return this.client.get<number> (
      `${this.BASE_URL}/products/${productID}/put_rating/${minRate}/`
    )
  }


  getProductImages(p_id: number): Observable<Image[]> {
    return this.client.get<Image[]> (
      `${this.BASE_URL}/products/${p_id}/product_images/`
    )
  }

  getProduct(p_id: number): Observable<Product> {
    return this.client.get<Product> (
      `${this.BASE_URL}/products/${p_id}`
    )
  }

  // path('products/<int:product_id>/product_images/',
  // ProductImageViewSet.as_view({'get': 'product_images_of_product'}), name='product images of product'),

  // path('popular_products/',
  // ProductViewSet.as_view({'get': 'get_popular_products'}), name='sorted in desc by rating'),
  searchByName(pattern: string): Observable<Product[]> {
    return this.client.post<Product[]>(`${this.BASE_URL}/products/name/`, pattern)
  }

  // path('products/name/',
  // ProductViewSet.as_view({'post': 'search_by_name'}), name='search product by name')
}
