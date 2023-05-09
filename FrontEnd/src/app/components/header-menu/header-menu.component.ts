import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit{
  isSeller: boolean | undefined;
  isCustomer: boolean | undefined;
  u_id : number | undefined
  ngOnInit() {
    this.u_id = Number(localStorage.getItem('id'));
    if(localStorage.getItem('user_type')=='Seller') this.isSeller = true;
    if(localStorage.getItem('user_type')=='Customer') this.isCustomer = true;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user_type');
    localStorage.removeItem('id');
  }

}
