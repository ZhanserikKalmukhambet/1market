import {Component, OnInit} from '@angular/core';
import {WarehouseItem} from "../../models";
import {ProductService} from "../../services/product/product.service";

@Component({
  selector: 'app-seller-products',
  templateUrl: './seller-products.component.html',
  styleUrls: ['./seller-products.component.css']
})
export class SellerProductsComponent implements OnInit{
  isEmpty : boolean = false;
  products: WarehouseItem[] = [];
  shop_id: number = 0
  constructor(private productService: ProductService) {
    this.shop_id = Number(localStorage.getItem('shop_id'));
  }
  ngOnInit() {

    this.productService.getWarehouseItemsByShopID(this.shop_id).subscribe((data) => {
      this.products = data;
      console.log(data)
    })

  }
}
