import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <h1>About</h1>
    <p>
    Donec sed ultrices magna, vel ornare enim. Nunc egestas imperdiet nunc. Nullam ac egestas orci, a efficitur elit.
    </p>
  `,
  styles: []
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
