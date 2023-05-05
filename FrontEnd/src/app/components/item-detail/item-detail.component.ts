import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Price, Product} from "../../models";
import {ProductService} from "../../services/product/product.service";

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit{
  // @Input() product: Product  ;
  @Input() item !: Product;
  isSeller: boolean | undefined;
  isCustomer: boolean | undefined;
  constructor(private productService : ProductService
  ) {}
  ngOnInit() {
    if(localStorage.getItem('user_type')=='Seller') this.isSeller = true;
    if(localStorage.getItem('user_type')=='Customer') this.isCustomer = true;
  }

  // async getMinPrice(id: number): Promise<Price | undefined>{
  //   const data = await this.productService.getMinPrice(id).toPromise();
  //   console.log(data)
  //   return data
  // }
}
