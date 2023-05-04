import {Component, Input} from '@angular/core';
import {Product} from "../../models";

@Component({
  selector: 'app-item-in-basket',
  templateUrl: './item-in-basket.component.html',
  styleUrls: ['./item-in-basket.component.css']
})
export class ItemInBasketComponent {
  @Input() item !: Product;
}
