import {Component, ElementRef, OnInit} from '@angular/core';
import {CategoryBack, Product, SubCategoryBack} from "../../models";
import {CategoryService} from "../../services/category/category.service";
import {ActivatedRoute} from "@angular/router";
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

  constructor(private categoryService : CategoryService, private route: ActivatedRoute, private productService : ProductService) {
    this.currentSubCategory = {} as SubCategoryBack
    this.categories = [];
    this.currentCategory = {} as CategoryBack
    this.products = []
  }
  getCategories(){
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }


  ngOnInit() {
    this.route.paramMap.subscribe((params) =>{
      const id = Number(params.get('id'));
      const s_id = Number(params.get('subCategory_id'))

      this.categoryService.getCategory(id).subscribe((category) =>{
        this.currentCategory = category;
      })
      this.categoryService.getSubCategory(id, s_id).subscribe((subCategory) =>{
        this.currentSubCategory = subCategory;
      })
      this.productService.getSubcategoryProducts(id, s_id).subscribe( (data) => {
        this.products = data
      })
    })
    this.getCategories()

    const myDiv = document.querySelectorAll('.currentCategory');
    console.log(myDiv)
    // @ts-ignore
    for (let div of myDiv) {
      // console.log(div)
      if (div.innerText === this.currentCategory) {
        div.style.color = 'black';
        div.style.fontWeight = 'bold';
      }
    }
  }
}
