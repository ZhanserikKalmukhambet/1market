import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Order, Product, SubCategory} from "../../models";
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


  getCategorySubcategories(catid: number): Observable<SubCategory[]> {
    return this.client.get<SubCategory[]> (
      `${this.BASE_URL}/categories/${catid}/subcategories/`
    )
  }
  // path('categories/<int:category_id>/subcategories/',
  // SubCategoryViewSet.as_view({'get': 'get_subcategories_of_category'})),




  getSubcategoryProducts(catid: number, subcatid: number): Observable<Product[]> {
    return this.client.get<Product[]> (
      `${this.BASE_URL}/categories/${catid}/subcategories/${subcatid}/products/`
    )
  }
  // path('categories/<int:category_id>/subcategories/<int:subcat_id>/products/',
  // ProductViewSet.as_view({'get': 'get_subcategory_products'})),




  getProductsMinRate(minRate: number): Observable<Product[]> {
    return this.client.get<Product[]> (
      `${this.BASE_URL}/products/rating/${minRate}/`
    )
  }
  // path('products/rating/<int:min>/',
  // ProductViewSet.as_view({'get': 'get_products_min_rating'}), name='products with minimum rate'),



  putRatingToProduct(productID: number, minRate: number): Observable<number> {
    return this.client.get<number> (
      `${this.BASE_URL}/products/${productID}/put_rating/${minRate}/`
    )
  }
  // path('products/<int:product_id>/put_rating/<int:new_rating>/',
  // ProductViewSet.as_view({'get': 'put_rating_to_product'}), name='rate product'),




  // path('products/<int:product_id>/product_images/',
  // ProductImageViewSet.as_view({'get': 'product_images_of_product'}), name='product images of product'),

  // path('popular_products/',
  // ProductViewSet.as_view({'get': 'get_popular_products'}), name='sorted in desc by rating'),

  // path('products/name/',
  // ProductViewSet.as_view({'post': 'search_by_name'}), name='search product by name')
}
