import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs";
import { LoginService } from "../../services/login/login.service";
import {Person} from "../../models";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{
  username: string = '';
  password: string = '';
  person: Person = {username: '', password: ''};
  loginError: boolean | undefined;

  constructor(private loginService: LoginService, private router: Router){
    // // this.person = new Person();
    // this.person.username = '';
    // this.person.password = '';

  }

  ngOnInit() {
    // const token = localStorage.getItem('token');
    // const role = localStorage.getItem('role');
    // if (token) {
    //   this.loginService.logged = true;
    // }else if(role.value == 'customer'){
    //   this.loginService.isCustomer = true;
    // }else if(role.value == 'customer'){
    //   this.loginService.isSeller = true;
    // }
    this.loginError = true;
  }
  login() {
    // this.loginService.logIn(this.username, this.password).subscribe((data) => {
    //   localStorage.setItem('token', data.token);
    //   this.loginService.logged = true;
    //   this.router.navigate([`/`]);
    // });
    if(this.person.username == 'customer' && this.person.password=='customer'){
      // StorageService.logged = true;
      // StorageService.isCustomer = true;
      localStorage.setItem('logged', 'true');
      localStorage.setItem('isCustomer', 'true')
      this.loginError = true;
      console.log(this.person.username, this.person.password)
      this.router.navigate([`/`]);
    }else if(this.person.username == 'seller' && this.person.password=='seller'){
      // StorageService.logged = true;
      // StorageService.isSeller = true;
      localStorage.setItem('logged', 'true');
      localStorage.setItem('isSeller', 'true')
      this.loginError = true;
      console.log(this.person.username, this.person.password)
      this.router.navigate([`/`]);
    }else{
      console.log(this.person.username, this.person.password)
      this.loginError = false;
    }
  }



}
