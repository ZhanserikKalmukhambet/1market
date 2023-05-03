import {Component, Input} from '@angular/core';
import {Product} from "../../models";

@Component({
  selector: 'app-product-list-in-category-detail',
  templateUrl: './product-list-in-category-detail.component.html',
  styleUrls: ['./product-list-in-category-detail.component.css']
})
export class ProductListInCategoryDetailComponent {
  @Input() products !: Product[];
}
