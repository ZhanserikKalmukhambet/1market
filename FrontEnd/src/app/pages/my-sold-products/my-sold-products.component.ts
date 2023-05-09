import { Component } from '@angular/core';
import {WarehouseItem} from "../../models";
import {ProductService} from "../../services/product/product.service";

@Component({
  selector: 'app-my-sold-products',
  templateUrl: './my-sold-products.component.html',
  styleUrls: ['./my-sold-products.component.css']
})
export class MySoldProductsComponent {
  isEmpty : boolean = false;
  products: WarehouseItem[] = [];
  shop_id: number = 2
  constructor(private productService: ProductService) {

  }
  ngOnInit() {
    this.productService.getSoldItemsByShopID(Number(localStorage.getItem('user_id'))).subscribe((data) => {
      this.products = data;
      console.log(data)
    })
  }
}
