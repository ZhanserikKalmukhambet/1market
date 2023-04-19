import {Component, OnInit} from '@angular/core';
import {Category, Product} from "../../models";
import {ActivatedRoute} from "@angular/router";
import {CategoryService} from "../../services/category/category.service";

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
export class CategoryDetailComponent{

  category = {
    name: 'Телефоны'
  }

  products = [
    {
      "id": "68c270cb-9660-45bd-8b02-0140ed6a4745",
      "name": "Yong",
      "description": [
        "harass",
        "dislike",
        "placid",
        "zipper",
        "fixed",
        "optimal",
        "glow",
        "jittery"
      ],
      "price": 707,
      "rating": 4
    },
    {
      "id": "9603ae0a-9ba7-436b-8895-d9f3a3542771",
      "name": "Romana",
      "description": [
        "third",
        "relieved",
        "complex",
        "promise",
        "short",
        "loutish"
      ],
      "price": 205,
      "rating": 4
    },
    {
      "id": "a45eb5d5-d21b-4c14-8511-6934ee84936c",
      "name": "Trena",
      "description": [
        "top",
        "develop",
        "realise",
        "screeching",
        "remember",
        "gusty"
      ],
      "price": 520,
      "rating": 3
    }
  ]
  // products: Product[] = [];
  // category : Category;


  // constructor(private categoryService: CategoryService, private route : ActivatedRoute) {
  //   this.category = {} as Category
  //
  // }
  //
  // ngOnInit() {
  //   this.route.paramMap.subscribe((params) =>{
  //     const id = Number(params.get('id'));
  //     this.categoryService.getCategory(id).subscribe((category) =>{
  //       this.category = category
  //     })
  //     this.categoryService.getProducts(id).subscribe((products) => {
  //       this.products = products;
  //     });
  //   })
  //
  // }
}
