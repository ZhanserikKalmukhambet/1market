import {Component, OnInit} from '@angular/core';
import {CategoryBack, MyJwtPayload, SubCategoryBack} from "../../models";
import {LoginService} from "../../services/login/login.service";
import {Router} from "@angular/router";
import jwt_decode from "jwt-decode";
import {CategoryService} from "../../services/category/category.service";

@Component({
  selector: 'app-categories-nav',
  templateUrl: './categories-nav.component.html',
  styleUrls: ['./categories-nav.component.css']
})
export class CategoriesNavComponent implements OnInit{
  categories : CategoryBack[] ;
  // subCategories : SubCategoryBack[] ;
  // static categories: Category[];
  categoryToSubCategoriesMap : Map<CategoryBack, SubCategoryBack[]>;

  constructor(private categoryService: CategoryService){
    this.categories = [];
    this.categoryToSubCategoriesMap = new Map<CategoryBack, SubCategoryBack[]>();
  }
  getCategories() {
    this.categoryService.getCategories().subscribe((data: CategoryBack[]) => {
      this.categories = data;
      this.categories.forEach((category) => {
        this.categoryService.getSubcategoriesOfCategory(category.id).subscribe((subcategories: SubCategoryBack[]) => {
            this.categoryToSubCategoriesMap.set(category, subcategories);
          });
      });
    });
    console.log(this.categoryToSubCategoriesMap)
  }
  ngOnInit() {
    this.getCategories()
  }

}
