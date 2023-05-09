import {Component, Input, OnInit} from '@angular/core';

import { RegisterService } from '../../services/register/register.service';
import {nonAuthUser, Person, Shop} from "../../models";
import {Router} from "@angular/router";

@Component({
  templateUrl: 'registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent{
  isSeller: boolean;
  sended: boolean;
  code: string;
  newUser: nonAuthUser = {id: 0, first_name: '', last_name: '', username: '', email: '', user_type: '', phone_number: '', password: ''};
  newShop: Shop = {id: 0, name: '', address: '', seller: 0};


  constructor(private registerService: RegisterService, private router: Router) {
    this.isSeller = false;
    this.sended = false;
    this.code = "";
  }

  Registration(){
    if(this.isSeller){
      this.newUser.user_type = 'Seller'
    }
    else{
      this.newUser.user_type = 'Customer';
    }

    this.registerService.register(this.newUser.first_name, this.newUser.last_name, this.newUser.username, this.newUser.email, this.newUser.user_type, this.newUser.phone_number,
      this.newUser.password).subscribe((data) => {
        const id = data.id;

        if(this.isSeller){
          this.registerService.createShop(this.newShop.name, this.newShop.address, id).subscribe((data) => {
          })
        }

        this.router.navigate([`/`]);
    });
  }

  // sendCodeToEmail(){
  //   this.registerService.sendCodeToEmail(this.newUser.email).subscribe(() => {
  //
  //   })
  // }
}
