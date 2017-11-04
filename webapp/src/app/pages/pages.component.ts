import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `
    <div class="pages">
      <app-menu></app-menu>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
