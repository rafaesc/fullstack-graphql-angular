import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
    <ul>
      <li><a routerLink="/" routerLinkActive="active">Home</a></li>
      <li><a routerLink="/about" routerLinkActive="active">About</a></li>
      <li><a routerLink="/thoughts" routerLinkActive="active">Thoughts</a></li>
    </ul>
  `,
  styles: []
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
