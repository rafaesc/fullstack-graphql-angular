import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { ThoughtsService } from '../../services/thoughts.service';
import * as store from '../index';
import * as storeThoughts from '../reducers/thoughts.reducer';
import * as thoughtsActions from '../actions/thoughts.action';
import * as thoughtDetailsActions from '../actions/thought-details.action';
import * as createActions from '../actions/create.action';
import * as removeActions from '../actions/remove.action';
import { Thought } from '../../models/thought.model';

@Injectable()
export class ThoughtsEffects {
  /**
   * Load Thoughts effect
   */
  @Effect()
  loadThoughts$: Observable<Action> = this.actions$
    .ofType(thoughtsActions.ActionTypes.LOAD)
    .map((action: thoughtsActions.LoadAction) => action.payload)
    .switchMap(state => {
      return (
        this.thoughtsService
          .getList()
          .mergeMap(res => [
            new thoughtsActions.LoadSuccessAction(
              res.map(item => new Thought(item))
            )
          ])
          .catch(error => of(new thoughtsActions.LoadFailAction(error)))
      );
    });

  /**
   * Load Thought Details effect
   */
  @Effect()
  loadThoughtDetails$: Observable<Action> = this.actions$
    .ofType(thoughtDetailsActions.ActionTypes.LOAD)
    .map((action: thoughtDetailsActions.LoadAction) => action.payload)
    .switchMap(state => {
      return (
        this.thoughtsService
          .get(state)
          .mergeMap(res => [
            new thoughtDetailsActions.LoadSuccessAction(new Thought(res))
          ])
          .catch(error => of(new thoughtDetailsActions.LoadFailAction(error)))
      );
    });

    /**
     * Create Thought effect
     */
    @Effect()
    create$: Observable<Action> = this.actions$
      .ofType(createActions.ActionTypes.LOAD)
      .map((action: createActions.LoadAction) => action.payload)
      .switchMap(state => {
        return (
          this.thoughtsService
            .create(state)
            .mergeMap(res => [
              new createActions.LoadSuccessAction(res)
            ])
            .catch(error => of(new createActions.LoadFailAction(error)))
        );
      });


    /**
     * Remove Thought effect
     */
    @Effect()
    remove$: Observable<Action> = this.actions$
      .ofType(removeActions.ActionTypes.LOAD)
      .map((action: removeActions.LoadAction) => action.payload)
      .switchMap(state => {
        return (
          this.thoughtsService
            .remove(state)
            .mergeMap(res => [
              new removeActions.LoadSuccessAction(res)
            ])
            .catch(error => of(new removeActions.LoadFailAction(error)))
        );
      });

  constructor(
    private actions$: Actions,
    private thoughtsService: ThoughtsService,
    private appState$: Store<store.State>
  ) {}
}
