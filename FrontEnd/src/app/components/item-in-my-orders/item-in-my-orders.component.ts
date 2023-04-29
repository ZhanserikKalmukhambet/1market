import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-item-in-my-orders',
  templateUrl: './item-in-my-orders.component.html',
  styleUrls: ['./item-in-my-orders.component.css']
})
export class ItemInMyOrdersComponent {
  @Input() item = {
    "id": "9603ae0a-9ba7-436b-8895-d9f3a3542771",
    "name": "Apple iPhone 14 Pro Max 256Gb фиолетовый",
    "description" : "harhdfsfjkgnfosnfsffnaskdfnosidfaosdfoasidfmosdfoiass",
    "price": 205,
    "rating": 4,
    "count" : 4,
    "main_image" : "sdf",
    "is_active" : true,
    "category" : "sd",
    "subCategory" : "sd"
  }
}
