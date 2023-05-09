import {Component, Input} from '@angular/core';
import {WarehouseItem} from "../../models";

@Component({
  selector: 'app-item-in-my-orders',
  templateUrl: './item-in-my-orders.component.html',
  styleUrls: ['./item-in-my-orders.component.css']
})
export class ItemInMyOrdersComponent {
  @Input() item !: WarehouseItem;
}
