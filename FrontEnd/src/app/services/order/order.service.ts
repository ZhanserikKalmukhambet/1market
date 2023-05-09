import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Order, OrderItem} from "../../models";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  BASE_URL = "http://127.0.0.1:8000/api";

  constructor(private client: HttpClient) { }

  getOrderItemsInCart(userID: number): Observable<OrderItem[]> {
    return this.client.get<OrderItem[]> (
      `${this.BASE_URL}/users/${userID}/cart_order_items/`
    )
  }
  // path('users/<int:user_id>/cart_order_items/',
  // OrderItemViewSet.as_view({'get': 'get_order_items_in_cart'}), name='get products in cart'),

  getOrderItemsOfOrder(orderID: Number): Observable<OrderItem[]> {
    return this.client.get<OrderItem[]> (
      `${this.BASE_URL}/orders/${orderID}/orderitems/`
    )
  }
  getOrders(userID: number): Observable<Order[]> {
    return this.client.get<Order[]> (
      `${this.BASE_URL}/users/${userID}/orders`
    )
  }


  addWareHouseItemToCart(user_id : number, order: number, warehouse_item: number, quantity: number): Observable<any>{
    return this.client.post<any> (
      `${this.BASE_URL}/users/${user_id}/add_item_to_cart/`,{quantity, order, warehouse_item}
    )
  }

  deleteOrderItem(orderitemID: number): Observable<any> {
    return this.client.delete<OrderItem> (
      `${this.BASE_URL}/orderitems/${orderitemID}/`
    )
  }
  purchaseCart(completed: boolean,user: number, delivery_address: string, delivery_date: string, delivery_price: number): Observable<any>{
    return this.client.put<any>(
      `${this.BASE_URL}/users/${user}/purchase_cart/`,
      {completed, delivery_date, delivery_address, delivery_price, user}
    )
  }


}
