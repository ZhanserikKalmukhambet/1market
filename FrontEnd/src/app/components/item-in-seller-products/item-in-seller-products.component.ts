import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-item-in-seller-products',
  templateUrl: './item-in-seller-products.component.html',
  styleUrls: ['./item-in-seller-products.component.css']
})
export class ItemInSellerProductsComponent {
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
