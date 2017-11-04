import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import find from 'lodash/find';
import * as store from '../../../@shared/store';
import * as thoughtsActions from '../../../@shared/store/actions/thoughts.action';
import * as removeActions from '../../../@shared/store/actions/remove.action';
import { Thought } from '../../../@shared/models/thought.model';

@Component({
  selector: 'app-list',
  template: `
    <h1>Thoughts</h1>
    <p>
      <a routerLink="/thoughts/create">Create</a>
    </p>
    <ul>
      <li *ngFor="let item of thoughts">
        <app-item [thought]="item" (onDelete)="handleOnDelete($event)"></app-item>
      </li>
    </ul>
  `,
  styles: []
})
export class ListComponent implements OnInit {

  public thoughts: Array<Thought>;
  private thoughts$ = this.appState$.select(store.getThoughts);
  private removeState$ = this.appState$.select(store.getRemoveState);

  private removeLoaded$;

  constructor(protected appState$: Store<store.State>) {
    appState$.dispatch(new thoughtsActions.LoadAction());
  }

  ngOnInit() {
    this.thoughts$.subscribe(thoughts => {
      this.thoughts = thoughts;
    });
  }

  handleOnDelete(id) {
    const check = window.confirm('Are you sure you want to delete this thought?');
    if (check) {
      const thought = find(this.thoughts, {id});
      this.appState$.dispatch(new removeActions.LoadAction(thought));
      this.subscribeToRemoveChanges();
    }
  }

  private subscribeToRemoveChanges() {
    if (this.removeLoaded$) {
      return;
    }

    this.removeLoaded$ = this.removeState$.subscribe(state => {
      if (!state.loading) {
        this.appState$.dispatch(new thoughtsActions.LoadAction());
      }
    });
  }
}
