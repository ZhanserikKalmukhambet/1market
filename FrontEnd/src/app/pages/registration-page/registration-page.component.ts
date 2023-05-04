import { Component, OnInit } from '@angular/core';

import { RegisterService } from '../../services/register/register.service';
import {nonAuthUser, Person, Shop} from "../../models";
import {Router} from "@angular/router";
import {isNumber} from "@ng-bootstrap/ng-bootstrap/util/util";

@Component({
  templateUrl: 'registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit{
  last_user_id: number;
  isSeller: boolean;
  sended: boolean;
  code: string;
  newUser: nonAuthUser = {first_name: '', last_name: '', username: '', email: '', user_type: 'Customer', phone_number: '', password: ''};
  newShop: Shop = {name: '', address: '', rating: 0, sellerID: 0};

  constructor(private registerService: RegisterService, private router: Router) {
    this.isSeller = false;
    this.sended = false;
    this.code = "";
    this.last_user_id = -1;
  }

  userRegistration(){
    if(this.isSeller){
      this.newUser.user_type = "Seller";
    }
    this.registerService.register(this.newUser.first_name, this.newUser.last_name, this.newUser.username, this.newUser.email, this.newUser.user_type, this.newUser.phone_number,
                                  this.newUser.password).subscribe((data) => {
                                    return data
      this.router.navigate([`/`]);
    });
  }

  createShopForSeller(){
    this.registerService.createShop(this.newShop.name, this.newShop.address, this.last_user_id + 1).subscribe(() => {
    })
  }


  ngOnInit(): void{
    this.getLastUserID();
  }

  getLastUserID(){
    this.registerService.getLastUserID().subscribe((id) => {
      this.last_user_id = id;
    })
  }

  // sendCodeToEmail(){
  //   this.registerService.sendCodeToEmail(this.newUser.email).subscribe(() => {
  //
  //   })
  // }
}
