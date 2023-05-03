import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs";
import { LoginService } from "../../services/login/login.service";
import {MyJwtPayload, Person} from "../../models";
import jwt_decode, { JwtPayload } from 'jwt-decode';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{

  person: Person = {username: '', password: ''};
  loginError: boolean | undefined;

  constructor(private loginService: LoginService, private router: Router){
    // // this.person = new Person();
    // this.person.username = '';
    // this.person.password = '';

  }

  ngOnInit() {
    this.loginError = true;
  }
  login() {
    this.loginService.logIn(this.person.username, this.person.password).subscribe((data) => {
      // @ts-ignore
      localStorage.setItem('token', data);
      // @ts-ignore
      const decoded: MyJwtPayload = jwt_decode(data);
      localStorage.setItem('id', String(decoded.id));
      localStorage.setItem('user_type', decoded.user_type)
      this.router.navigate([`/`]);
    });
  }



}
