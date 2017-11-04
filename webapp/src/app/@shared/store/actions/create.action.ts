import { Action } from '@ngrx/store';

import { type } from '../../utils/helpers';
import { Thought } from '../../models/thought.model';

export const ActionTypes = {
  LOAD: type('[Create] Load'),
  LOAD_SUCCESS: type('[Create] Load Success'),
  LOAD_FAIL: type('[Create] Load Fail'),
};

/**
 * Create Actions
 */
export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor(public payload: Thought) { }
}

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: any = null) { }
}

export class LoadFailAction implements Action {
  type = ActionTypes.LOAD_FAIL;

  constructor(public payload: any = null) { }
}

export type Actions
  = LoadAction
  | LoadSuccessAction
  | LoadFailAction;
