import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  right: boolean ;
  constructor() {
    this.right = false
  }

  ngOnInit(): void {
    this.on();
  }
  on(){
    this.right = true
  }
}
