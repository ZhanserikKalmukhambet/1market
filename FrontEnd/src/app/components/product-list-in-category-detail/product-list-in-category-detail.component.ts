import {Component, Input} from '@angular/core';
import {Product} from "../../models";
import {ProductService} from "../../services/product/product.service";

@Component({
  selector: 'app-product-list-in-category-detail',
  templateUrl: './product-list-in-category-detail.component.html',
  styleUrls: ['./product-list-in-category-detail.component.css']
})
export class ProductListInCategoryDetailComponent {
  @Input() products !: Product[];

  constructor(private productService : ProductService) {
  }

  // getMinPrice(id: number) {
  //   this.productService.getMinPrice(id).subscribe((data) => {
  //     return data;
  //   })
  //   return 0;
  // }
}
