import {Component, Input, OnInit} from '@angular/core';
import {Image, Price, Product, Shop, WarehouseItem} from "../../models";
import {ProductService} from "../../services/product/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {OrderService} from "../../services/order/order.service";


@Component({
  selector: 'app-item-cart',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.css']
})
export class ItemCartComponent implements OnInit{
  // @Input() item !: Product;
  mainImage : string = '';
  item : Product;
  images : Image[];
  user_id : number = 0;
  shop_id : number = 0;
  currentShop: Shop;
  constructor(private productService : ProductService, private route: ActivatedRoute, private orderService : OrderService) {
    this.item = {} as Product;
    this.images = [];
    this.currentShop = {} as Shop

  }
  isCustomer: boolean = false;
  isSeller: boolean = false;
  wareHouseItems: WarehouseItem[] = [];
   ngOnInit(): void {
    this.route.paramMap.subscribe((params) =>{
      const id = Number(params.get('p_id'));

      this.productService.getProduct(id).subscribe((product) => {
        this.item = product;
        this.getMinPrice(this.item.id).then((result) => {
          this.item.price = <number>result?.price__avg;
        })
        this.mainImage = this.item.main_image;
      });
      this.productService.getProductImages(id).subscribe((data) => {
        this.images = data;
      })
      this.productService.getWareHouseItemsOfProduct(id).subscribe((data) => {
        this.wareHouseItems = data;
      })

    })
    // this.item.description = this.item.description.replace(/_/g, '<br>');
    if(localStorage.getItem('user_type') == 'Customer') this.isCustomer = true;
    if(localStorage.getItem('user_type') == 'Seller') this.isSeller = true;
    this.user_id = Number(localStorage.getItem('id'));
     this.shop_id = Number(localStorage.getItem('shop_id'));
  }
  evaluate: boolean = false;

  zero:number = 0
  async getMinPrice(id: number): Promise<Price | undefined>{
    const data = await this.productService.getMinPrice(id).toPromise();
    return data
  }

  changeMainImage(event: any){
    const imageSrc = event.target.src;
    if(event.target.src == this.mainImage){
    }
    this.mainImage = imageSrc;
  }

  addWareHouseItemToCart(user_id : number, order: number, warehouse_item: number, quantity: number) {
    console.log(user_id, order, warehouse_item, quantity)
    this.orderService.addWareHouseItemToCart(Number(localStorage.getItem('id')), order, warehouse_item, quantity).subscribe((data) => {
      window.alert('Товар успешно добавлен в корзину')
    })
  }

  async addProductToWareHouse(product: number, shop: number, price: number, quantity: number){
    console.log(product, shop, price, quantity)
      this.productService.addProductToWareHouse(product, shop, price, quantity).subscribe((data)=>{
        window.alert('Вы добавили этот товар в ваш каталог')
      })

  }
  putMark(p_id:number, rate:number){
    // this.productService.putRatingToProduct(p_id, rate).subscribe((data)=>{
      window.alert(`Вы поставили оценку этому товару` )
    //   console.log(data)
    // })
  }
}
