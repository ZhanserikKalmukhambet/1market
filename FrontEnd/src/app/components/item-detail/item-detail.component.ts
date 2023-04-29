import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../models";

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit{
  // @Input() product: Product  ;
  @Input() item !: Product
  isSeller: boolean | undefined;
  isCustomer: boolean | undefined;
  constructor(
  ) {}
  ngOnInit() {
    if(localStorage.getItem('isSeller')=='true') this.isSeller = true;
    if(localStorage.getItem('isCustomer')=='true') this.isCustomer = true;
  }

  // @Input() items: IProduct[];
  // constructor(
  //   private http: HttpClient,
  //   private productsService: ProductsService
  // ) {}
  //
  // deleteItem(id: number, name: string) {
  //   this.http.delete(this.productsService.getURL() + `/${id}`).subscribe(() => {
  //     this.items = this.items.filter((x) => x.id !== id);
  //     alert(`${name} will be DELETED!`);
  //   });
  // }
  // @Input() product: Product;

}
