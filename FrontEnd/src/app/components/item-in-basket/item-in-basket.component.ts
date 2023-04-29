import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-item-in-basket',
  templateUrl: './item-in-basket.component.html',
  styleUrls: ['./item-in-basket.component.css']
})
export class ItemInBasketComponent {
  @Input() item = {
    "id": "",
    "name": "",
    "description" : "",
    "price": 0,
    "rating": 0,
    "count" : 0,
    "main_image" : "",
    "is_active" : true,
    "category" : "",
    "subCategory" : ""

  }
}
