import {Component, ElementRef, OnInit} from '@angular/core';
import {CategoryBack, Product} from "../../models";
import {ActivatedRoute} from "@angular/router";
import {CategoryService} from "../../services/category/category.service";
import {CategoriesNavComponent} from "../../components/categories-nav/categories-nav.component";

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
// name = models.CharField(max_length=255, verbose_name='Name', unique=True)
// main_image = models.ImageField(upload_to='images/%Y/%m/%d', null=True, blank=True, verbose_name='Main Image')
// is_active = models.BooleanField(default=True, verbose_name='Is Active?')
// price = models.FloatField(verbose_name='Price')
// description = models.TextField(null=True, verbose_name='Description')
// count = models.IntegerField(default=0, verbose_name='Quantity')
// rating = models.FloatField(null=True, validators=[validate_rating])
// category
export class CategoryDetailComponent implements OnInit{

  r1 = 1;
  r2 = 2;
  r3 = 3;
  r4 = 4;
  r5 = 5;

  categoryName : string = "";
  // products: Product[] = [];
  // category : Category;


    // constructor(private categoryService: CategoryService, private route : ActivatedRoute) {
    //   // this.category = {} as Category
    //
    // }
  isSeller: boolean | undefined;
  isCustomer: boolean | undefined;

  categories : CategoryBack[]  ;

  currentCategory: CategoryBack ;
  constructor(private categoryService : CategoryService, private route : ActivatedRoute) {
    this.currentCategory = {} as CategoryBack;
    this.categories = [];
  }
  getCategories(){
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data
    });
  }



  ngOnInit() {
    this.route.paramMap.subscribe((params) =>{
      const id = Number(params.get('id'));

      this.categoryService.getCategory(id).subscribe((category) =>{
        this.currentCategory = category;
      })
    })

    this.getCategories()
    // @ts-ignore
    // this.currentCategory = this.categories[3]
    if(localStorage.getItem('isSeller') == 'true') this.isSeller = true;
    if(localStorage.getItem('isCustomer') == 'true') this.isCustomer = true;
  }

}
