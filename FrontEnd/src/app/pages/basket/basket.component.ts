import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product/product.service";
import {BasketItem, ItemInBusket, OrderItem, Product} from "../../models";
import {OrderService} from "../../services/order/order.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit{
  isEmpty : boolean | undefined ;
  selectedDate: string = '';
  selectedAddress: string = '';
  user_id: number = 0;
  OrderItem : OrderItem[];
  constructor(private productService : ProductService, private orderService: OrderService, private router: Router) {
    this.OrderItem = [];
  }
  totalSum : number = 0;
  ngOnInit() {
    const u_id = localStorage.getItem('id');
    this.user_id = Number(u_id);
    this.productService.getItemsOfBasket(Number(u_id)).subscribe((OrderItem) =>{
      this.OrderItem = OrderItem;
      console.log(this.OrderItem)
      if(this.OrderItem.length == 0) this.isEmpty = true;
      console.log(OrderItem)
      for(let i = 0; i < OrderItem.length; i++){
        this.totalSum += OrderItem[i].priceInThisShop;
      }
    })

  }

  purchaseCart(completed: boolean,user: number, delivery_address: string, delivery_date: string, delivery_price: number) {
    const needDate = new Date(delivery_date).toJSON()
    this.orderService.purchaseCart(completed, user, delivery_address, needDate, delivery_price).subscribe(() => {
      window.alert(`Ваш заказ на ${this.totalSum} успешно оформлен и будет доставлен ${this.selectedAddress}`);
      this.router.navigate(['/']);
    })
  }


}
