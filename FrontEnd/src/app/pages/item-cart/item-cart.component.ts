import {Component, Input, OnInit} from '@angular/core';
import {Image, Price, Product} from "../../models";
import {ProductService} from "../../services/product/product.service";
import {ActivatedRoute, Router} from "@angular/router";


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
  constructor(private productService : ProductService, private route: ActivatedRoute) {
    this.item = {} as Product;
    this.images = [];
  }
  logged: boolean = false;

  isCustomer: boolean = false;
  isSeller: boolean = false;
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
        console.log(this.images)
      })
    })
    this.item.description = this.item.description.replace(/_/g, '<br>');
    if(localStorage.getItem('token') ) this.logged = true;
    if(localStorage.getItem('user_type') == 'Customer') this.isCustomer = true;
    if(localStorage.getItem('user_type') == 'Seller') this.isSeller = true;



  }
  async getMinPrice(id: number): Promise<Price | undefined>{
    const data = await this.productService.getMinPrice(id).toPromise();
    return data
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
