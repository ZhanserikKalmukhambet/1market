import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit{
  isSeller: boolean | undefined;
  isCustomer: boolean | undefined;
  ngOnInit() {
    if(localStorage.getItem('isSeller')) this.isSeller = true;
    if(localStorage.getItem('isCustomer')) this.isCustomer = true;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('logged');
    localStorage.removeItem('isCustomer');
    localStorage.removeItem('isSeller');
  }

}
