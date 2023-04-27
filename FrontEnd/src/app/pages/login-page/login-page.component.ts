import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs";
import { LoginService } from "../../services/login/login.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{


  // username: string = '';
  public username: string ;
  public password: string ;
  // password: string = '';
  // private logged: boolean;
  public static isLogged : boolean;
  // static isLogged: boolean;
  // static isLogged: boolean;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
    this.username = '';
    this.password = '';
  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.loginService.logged = true;
    }
    if(this.loginService.logged == true){
      LoginPageComponent.isLogged = true;
    }
  }
  login() {
    // this.loginService.logIn(this.username, this.password).subscribe((data) => {
    //   localStorage.setItem('token', data.token);
      this.loginService.logged = true;
      // LoginPageComponent.isLogged = true;
      // console.log(LoginPageComponent.isLogged)
      this.username = '';
      this.password = '';
      this.router.navigate([`/`]);
    // });
  }

  logout() {
    localStorage.removeItem('token');
    // Request to the Django
    // LoginService.logged = false;
  }

}
