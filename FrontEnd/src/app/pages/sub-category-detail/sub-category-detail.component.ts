import {Component, ElementRef, OnInit} from '@angular/core';
import {CategoryBack, Price, Product, Shop, SubCategoryBack} from "../../models";
import {CategoryService} from "../../services/category/category.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../services/product/product.service";

@Component({
  selector: 'app-sub-category-detail',
  templateUrl: './sub-category-detail.component.html',
  styleUrls: ['./sub-category-detail.component.css']
})
export class SubCategoryDetailComponent implements OnInit {

  r1 = 1;
  r2 = 2;
  r3 = 3;
  r4 = 4;
  r5 = 5;

  currentSubCategory: SubCategoryBack ;

  categories : CategoryBack[]  ;

  currentCategory: CategoryBack ;
  products: Product[];
  isSeller: boolean | undefined;
  isCustomer: boolean | undefined
  s_id: number = 0;

  constructor(private categoryService : CategoryService, private route: ActivatedRoute, private productService : ProductService, private router: Router) {
    this.currentSubCategory = {} as SubCategoryBack
    this.categories = [];
    this.currentCategory = {} as CategoryBack
    this.products = []
  }
  shops: Shop[] = [];
  getCategories(){
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
    this.productService.getShopsOfSubCategory(this.s_id).subscribe((data) => {
      console.log(data)
      this.shops = data;
    })
  }


  ngOnInit() {
    this.route.paramMap.subscribe((params) =>{
      const id = Number(params.get('id'));
      this.id = id
      const s_id = Number(params.get('subCategory_id'))
      this.s_id = s_id
      this.categoryService.getCategory(id).subscribe((category) =>{
        this.currentCategory = category;
      })
      this.productService.getSubcategoryProducts(id, s_id).subscribe( (productss) => {
        for(let i = 0; i < productss.length; i++) {
          this.getMinPrice(productss[i].id).then((result) => {
            productss[i].price = <number>result?.price__avg;
          })
        }
        this.products = productss;
        this.allProducts = this.products
      })
      this.categoryService.getSubCategory(s_id).subscribe((data)=>{
        this.currentSubCategory.name = data.subcat_name;
        console.log(this.currentSubCategory.name);
      })
    })
    if(localStorage.getItem('user_type') == 'Seller') this.isSeller = true;
    if(localStorage.getItem('user_type') == 'Customer') this.isCustomer = true;
    this.getCategories()

  }
  async getMinPrice(id: number): Promise<Price | undefined>{
    const data = await this.productService.getMinPrice(id).toPromise();
    return data
  }
  id: number = 0;

  minPrice: number = 0;
  maxPrice: number = 100000000;
  allProducts: Product[] = [];


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
  shop_id : number = 0;
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
