import {Component, Input} from '@angular/core';
import {OrderItem, Product} from "../../models";
import {OrderService} from "../../services/order/order.service";
import { Location } from '@angular/common';
@Component({
  selector: 'app-item-in-basket',
  templateUrl: './item-in-basket.component.html',
  styleUrls: ['./item-in-basket.component.css']
})
export class ItemInBasketComponent {
  @Input() item !: OrderItem;
  constructor(private orderService: OrderService, private location: Location) {
  }

  deleteItemFromCart(order_item_id: number) {
    this.orderService.deleteOrderItem(order_item_id).subscribe(() => {
      window.alert("Карточка успешно удалена")
      window.location.reload();
    })
  }
}
