import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Thought } from '../../../@shared/models/thought.model';

@Component({
  selector: 'app-item',
  template: `
    <div>
      {{ thought.thought }} - {{ thought.name }}
      &nbsp;&nbsp;
      <button [routerLink]="['/thoughts', thought.id]">View</button>
      &nbsp;
      <button (click)="onDelete.emit(thought.id)">Delete</button>
    </div>
  `,
  styles: []
})
export class ItemComponent {
  @Input() thought: Thought;
  @Output() onDelete: EventEmitter<any> = new EventEmitter();

}
