import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { LoginService } from "../../services/login/login.service";
import {AuthToken, MyJwtPayload, Person} from "../../models";
import jwt_decode, { JwtPayload } from 'jwt-decode';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{

  person: Person = {email: '', password: ''};
  loginError: boolean | undefined;

  constructor(private loginService: LoginService, private router: Router){

  }

  ngOnInit() {
    this.loginError = true;
  }
  login() {
    console.log(this.person)
    this.loginService.logIn(this.person.email, this.person.password).subscribe((data) => {
      localStorage.setItem('token', data.access);
      const decoded: MyJwtPayload = jwt_decode(data.access);
      console.log(decoded)
      localStorage.setItem('id', String(decoded.user_id));
      localStorage.setItem('user_type', decoded.user_type)
      this.router.navigate([`/`]);
    });
  }



}
