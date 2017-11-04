import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
    <p>
      loading works!
    </p>
  `,
  styles: []
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
