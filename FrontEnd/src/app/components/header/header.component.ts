import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login/login.service";
import {LoginPageComponent} from "../../pages/login-page/login-page.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  right: boolean ;
  isUser : boolean = false;
  constructor(private loginService: LoginService) {
    this.right = true
    // this.isUser = LoginPageComponent.isLogged
  }

  ngOnInit(): void {
    this.on();
    this.isUser = this.loginService.logged
    console.log(this.isUser + "Sgg")
  }
  on(){
    this.right = true
  }
}
