import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../models";
import {ProductService} from "../../services/product/product.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-item-cart',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.css']
})
export class ItemCartComponent implements OnInit{
  // @Input() item !: Product;
  mainImage : string = "assets/media/images/Products/Iphone14ProMax256GbPink.jpg"
  item : Product;
  constructor(private productService : ProductService, private route: ActivatedRoute) {
    this.item = {} as Product;
  }
  logged: boolean = false;
  price : number | undefined;
  isCustomer: boolean = false;
  isSeller: boolean = false;
  ngOnInit(): void {
    this.item.description = this.item.description.replace(/_/g, '<br>');
    if(localStorage.getItem('logged') == 'true') this.logged = true;
    if(localStorage.getItem('isCustomer') == 'true') this.isCustomer = true;
    if(localStorage.getItem('isSeller') == 'true') this.isSeller = true;

    this.route.paramMap.subscribe((params) =>{
      const id = Number(params.get('id'));

      this.productService.getProduct(id).subscribe((product) => {
        this.item = product;
      });
      this.productService.getMinPrice(id).subscribe((data) => {
        this.price = data;
      })
    })
  }

  changeMainImage(event: any){
    // this.mainImage = img;
    const imageSrc = event.target.src;
    // event.target.style.border = "1px solid blue"
    if(event.target.src == this.mainImage){
    }
    // event.style.border = "1px solid blue"
    this.mainImage = imageSrc;
  }

}
