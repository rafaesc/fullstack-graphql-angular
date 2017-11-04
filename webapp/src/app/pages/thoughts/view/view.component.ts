import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as store from '../../../@shared/store';
import * as thoughtDetailsActions from '../../../@shared/store/actions/thought-details.action';
import { Thought } from '../../../@shared/models/thought.model';

@Component({
  selector: 'app-view',
  template: `
    <h1>Thought</h1>
    <p>
      <a routerLink="/thoughts">Back</a>
    </p>
    <div>
        <h1>"{{ thought.thought }}"</h1>
        <h4> - {{ thought.name }}</h4>
    </div>
  `,
  styles: []
})
export class ViewComponent implements OnInit, OnDestroy {

  private thought = new Thought();
  private thoughtDetails$ = this.appState$.select(store.getDetails);

  constructor(
    private activeRouter: ActivatedRoute,
    protected appState$: Store<store.State>
  ) { }

  ngOnInit() {
    this.activeRouter.params.subscribe(params => {
      this.appState$.dispatch(new thoughtDetailsActions.LoadAction(parseInt(params.id, 10)));
    });
    this.thoughtDetails$.subscribe(thought => {
      this.thought = thought;
    });
  }

  ngOnDestroy() {
    this.appState$.dispatch(new thoughtDetailsActions.ResetAction());
  }
}
