import {Component, Input} from '@angular/core';
import {WarehouseItem} from "../../models";

@Component({
  selector: 'app-item-in-seller-products',
  templateUrl: './item-in-seller-products.component.html',
  styleUrls: ['./item-in-seller-products.component.css']
})
export class ItemInSellerProductsComponent {
  @Input() item !: WarehouseItem;
}
