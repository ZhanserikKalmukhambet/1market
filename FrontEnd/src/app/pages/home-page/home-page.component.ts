import {Component, OnInit} from '@angular/core';
import {RegisterService} from "../../services/register/register.service";
import {ProductService} from "../../services/product/product.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{


  constructor(private registerService : RegisterService, private productService: ProductService) {
  }
  ngOnInit() {
    if(localStorage.getItem('user_type') == 'Seller'){
      this.productService.getShopByUserId(Number(localStorage.getItem('id')))
        .subscribe((data) => {
          console.log( data.id.toString())
          localStorage.setItem('shop_id', data.id.toString())
        })
    }else{
      console.log('loh')
    }
  }

}
