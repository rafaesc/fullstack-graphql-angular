import { Action } from '@ngrx/store';

import { type } from '../../utils/helpers';
import { Thought } from '../../models/thought.model';

export const ActionTypes = {
  LOAD: type('[Remove] Load'),
  LOAD_SUCCESS: type('[Remove] Load Success'),
  LOAD_FAIL: type('[Remove] Load Fail'),
};

/**
 * Remove Actions
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
