import {Component, ElementRef, OnInit} from '@angular/core';
import {CategoryBack, Price, Product, Shop} from "../../models";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../../services/category/category.service";
import {CategoriesNavComponent} from "../../components/categories-nav/categories-nav.component";
import {ProductService} from "../../services/product/product.service";
import {isNumber} from "@ng-bootstrap/ng-bootstrap/util/util";

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})

export class CategoryDetailComponent implements OnInit{
  r1 = 1;
  r2 = 2;
  r3 = 3;
  r4 = 4;
  r5 = 5;
  categoryName : string = "";
  products: Product[] ;

  isSeller: boolean | undefined;
  isCustomer: boolean | undefined;

  categories : CategoryBack[]  ;

  currentCategory: CategoryBack ;
  id: number ;
  constructor(private categoryService : CategoryService, private route : ActivatedRoute, private productService : ProductService, private router: Router) {
    this.currentCategory = {} as CategoryBack;
    this.categories = [];
    this.products = [];
    this.getCategories()
    this.id = 0;
  }

  getCategories(){
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data
    });

    this.route.paramMap.subscribe((params) =>{
      this.id = Number(params.get('id'));
    })
    this.categoryService.getCategory(this.id).subscribe((category) =>{
      this.currentCategory = category;
    })
    this.productService.getShopsOfCategory(this.id).subscribe((data) => {
      console.log(data)
      this.shops = data;
    })
    this.productService.getCategoryProducts(this.id).subscribe((productss) => {
      for(let i = 0; i < productss.length; i++) {
        this.getMinPrice(productss[i].id).then((result) => {
          productss[i].price = <number>result?.price__avg;
        })
      }
      this.products = productss;
      this.allProducts = this.products;
    });

    if(localStorage.getItem('user_type') == 'Seller'){
      this.isSeller = true;
    }
    if(localStorage.getItem('user_type') == 'Customer') this.isCustomer = true;
  }

  minPrice: number = 0;
  maxPrice: number = 100000000;
  shop_id: number = 0;
  shops: Shop[] = [];
  allProducts: Product[] = [];
  ngOnInit() {
    this.getCategories()

  }

  async getMinPrice(id: number): Promise<Price | undefined>{
    const data = await this.productService.getMinPrice(id).toPromise();
    return data
  }
  getProductsByPrice(minPrice: number, maxPrice: number): Product[] {
    return this.allProducts.filter(product => product.price >= minPrice && product.price <= maxPrice);
  }

  FilterByPrice(minPrice : number, maxPrice : number, event: any) {
    if (event.target.checked) {
      this.router.navigate([`/categories/${this.id}`], {
        queryParams: {
          filter: 'price',
          'minprice': `${minPrice}`,
          'maxprice': `${maxPrice}`
        }
      }).then(() =>{
        this.minPrice = this.route.snapshot.queryParams['minprice'];
        this.maxPrice = this.route.snapshot.queryParams['maxprice'];
        console.log(this.minPrice, this.maxPrice)
        }
      ).then(() => {
        const data = this.getProductsByPrice(this.minPrice, this.maxPrice)
        if(data.length!=0){
          this.products = data
        }else{
          this.products = [];
        }

        console.log(data)
      })
    };
  }

  FilterByShops(shop_id : number, event: any) {
    if (event.target.checked) {
      this.router.navigate([`/categories/${this.id}`], {
        queryParams: {
          shop_id: `${shop_id}`
        }
      }).then(() => {
        this.shop_id = this.route.snapshot.queryParams['shop_id'];
        console.log(shop_id)
      }).then(() => {
        this.productService.getProductsOfShop(shop_id).subscribe((productss) =>{
          for(let i = 0; i < productss.length; i++) {
            this.getMinPrice(productss[i].id).then((result) => {
              productss[i].price = <number>result?.price__avg;
            })
          }
          this.products = productss;
        })
      });
    }
  }
}
