import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core',
  template: `
    <div class="core">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class CoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
