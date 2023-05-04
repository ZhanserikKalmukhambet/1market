import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product/product.service";
import {BasketItem, ItemInBusket, Product} from "../../models";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit{
  isEmpty : boolean | undefined ;
  // products = [
  //   {
  //     "id": "68c270cb-9660-45bd-8b02-0140ed6a4745",
  //     "name": "Apple iPhone 14 Pro Max 256Gb фиолетовый",
  //     "description" : "harhdfsfjkgnfosnfsffnaskdfnosidfaosdfoasidfmosdfoiass",
  //     "price": 707,
  //     "rating": 4,
  //     "count" : 4,
  //     "main_image" : "sdf",
  //     "is_active" : true,
  //     "category" : "sd",
  //     "subCategory" : "sd"
  //   },
  //
  //   {
  //     "id": "a45eb5d5-d21b-4c14-8511-6934ee84936c",
  //     "name": "Apple iPhone 14 Pro Max 256Gb фиолетовый",
  //     "description" : "harhdfsfjkgnfosnfsffnaskdfnosidfaosdfoasidfmosdfoiass",
  //     "price": 520,
  //     "rating": 3,
  //     "count" : 4,
  //     "main_image" : "sdf",
  //     "is_active" : true,
  //     "category" : "sd",
  //     "subCategory" : "sd"
  //   },
  //   {
  //     "id": "a45eb5d5-d21b-4c14-8511-6934ee84936c",
  //     "name": "Apple iPhone 14 Pro Max 256Gb фиолетовый",
  //     "description" : "harhdfsfjkgnfosnfsffnaskdfnosidfaosdfoasidfmosdfoiass",
  //     "price": 520,
  //     "rating": 3,
  //     "count" : 4,
  //     "main_image" : "sdf",
  //     "is_active" : true,
  //     "category" : "sd",
  //     "subCategory" : "sd"
  //   }
  //   ]
  products : Product[];
  basketItems : BasketItem[];
  itemsInBusket : ItemInBusket[];
  constructor(private productService : ProductService) {
    this.products = [];
    this.basketItems = [];
    this.itemsInBusket = [];
  }
  ngOnInit() {
    const u_id = localStorage.getItem('id');
    this.productService.getItemsOfBasket(Number(u_id)).subscribe((basketItems) =>{
      this.basketItems = basketItems;
      for(let bi of this.basketItems){
        console.log(bi)
      }
    })

  }
}
