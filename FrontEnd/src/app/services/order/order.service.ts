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


  getOrders(userID: number): Observable<Order[]> {
    return this.client.get<Order[]> (
      `${this.BASE_URL}/users/${userID}/orders`
    )
  }
  // path('users/<int:user_id>/orders/',
  // OrderItemViewSet.as_view({'get': 'get_user_orders'}), name='get products in cart'),




  getOrderItemsOfOrder(orderID: number): Observable<OrderItem[]> {
    return this.client.get<OrderItem[]> (
      `${this.BASE_URL}/orders/${orderID}/orderitems/`
    )
  }
  // path('orders/<int:order_id>/orderitems/',
  // OrderItemViewSet.as_view({'get': 'get_user_order_orderitems'}), name='get orderitems in exact order'),




  purchaseCart(orderID: number, order: Order): Observable<Order> {
    return this.client.put<Order> (
      `${this.BASE_URL}/orders/${orderID}/purchase/`,
      order
    )
  }
  // path('orders/<int:order_id>/purchase/',
  // OrderViewSet.as_view({'put': 'purchase_orderitems_in_order'}), name='purchase cart'),



  deleteOrderItem(orderitemID: number): Observable<any> {
    return this.client.delete<OrderItem> (
      `${this.BASE_URL}/orderitems/${orderitemID}/`
    )
  }
  // path('orderitems/<int:orderitem_id>/',
  // OrderItemViewSet.as_view({'delete': 'delete_order_item_from_order'}), name='delete order item'),


  addOrderItem(orderitem: OrderItem): Observable<OrderItem> {
    return this.client.post<OrderItem> (
      `${this.BASE_URL}/orders/`,
      orderitem
    )
  }
  // path('orders/',
  // OrderItemViewSet.as_view({'post': 'add_order_item_to_order'}), name='add order item'),
}
