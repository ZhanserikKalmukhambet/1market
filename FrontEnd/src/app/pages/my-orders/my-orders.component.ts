import {Component, OnInit} from '@angular/core';
import {Order, OrderItem} from "../../models";
import {OrderService} from "../../services/order/order.service";

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit{
  isEmpty : boolean = false;
  orders : Order[] ;
  user_id: number = 0;

  constructor(private orderService : OrderService) {
    this.orders = [];
    this.currentOrderItems = [];
    this.user_id = Number(localStorage.getItem('id'));
  }

  ngOnInit() {
    this.orderService.getOrders(this.user_id).subscribe((data) => {
      this.orders = data;
      this.currentOrderItems = this.orders[0].order_items
      for(let i = 0; i < this.orders.length; i++){
        this.orderService.getOrderItemsOfOrder(this.orders[i].id).subscribe((oi) => {
          // @ts-ignore
          this.orders[i].order_items = oi;
        })
      }
    })
  }
  currentOrderItems: OrderItem[]  ;

  changeCurrentOrderItem(order_item: OrderItem[]) {
    this.currentOrderItems = order_item;
  }
}
