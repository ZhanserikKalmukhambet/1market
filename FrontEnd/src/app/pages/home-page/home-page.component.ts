import {Component, OnInit} from '@angular/core';
import {RegisterService} from "../../services/register/register.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{


  constructor(private registerService : RegisterService) {
  }
  ngOnInit() {

  }

}
