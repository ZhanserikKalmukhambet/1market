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

}
