import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login/login.service";
import {LoginPageComponent} from "../../pages/login-page/login-page.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  logged: boolean | undefined
  isCustomer: boolean | undefined;
  isSeller: boolean | undefined;
  constructor(public loginService: LoginService, private router: Router) {
    if(localStorage.getItem('user_type')=='Seller') {
      this.isSeller = true;
      this.logged = true;
    }
    if(localStorage.getItem('user_type')=='Customer') {
      this.isCustomer = true;
      this.logged = true;
    }
  }

  ngOnInit(): void {

    // console.log('logged: ', this.logged, 'seller: ', this.isSeller, 'customer: ', this.isCustomer)
  }
  // searchByName()

  Find(value: string) {
    this.router.navigate([`allProducts/name/${value}`])
  }
}
