import { Action } from '@ngrx/store';

import { Thought } from '../../models/thought.model';
import { type } from '../../utils/helpers';

export const ActionTypes = {
  LOAD: type('[Thoughts Details] Load'),
  LOAD_SUCCESS: type('[Thoughts Details] Load Success'),
  LOAD_FAIL: type('[Thoughts Details] Load Fail'),
  RESET: type('[Thoughts Details] Reset'),
};

/**
 * Thoughts Details Actions
 */
export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor(public payload: Number) { }
}

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Thought) { }
}

export class LoadFailAction implements Action {
  type = ActionTypes.LOAD_FAIL;

  constructor(public payload: any = null) { }
}

export class ResetAction implements Action {
  type = ActionTypes.LOAD_FAIL;

  constructor(public payload: any = null) { }
}

export type Actions
  = LoadAction
  | LoadSuccessAction
  | LoadFailAction
  | ResetAction;
