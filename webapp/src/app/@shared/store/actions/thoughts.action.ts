import { Action } from '@ngrx/store';

import { Thought } from '../../models/thought.model';
import { type } from '../../utils/helpers';

export const ActionTypes = {
  LOAD: type('[Thoughts] Load'),
  LOAD_SUCCESS: type('[Thoughts] Load Success'),
  LOAD_FAIL: type('[Thoughts] Load Fail'),
};

/**
 * Thoughts Actions
 */
export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor(public payload: any = null) { }
}

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Array<Thought>) { }
}

export class LoadFailAction implements Action {
  type = ActionTypes.LOAD_FAIL;

  constructor(public payload: any = null) { }
}

export type Actions
  = LoadAction
  | LoadSuccessAction
  | LoadFailAction;
