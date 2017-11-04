import { Thought } from '../../models/thought.model';
import * as actions from '../actions/thoughts.action';

export interface State {
  loading: boolean;
  failed: boolean;
  data: Array<Thought>;
}

const INITIAL_STATE: State = {
  loading: false,
  failed: false,
  data: []
};

export function reducer(state = INITIAL_STATE, action: actions.Actions): State {
  if (!action) {
    return state;
  }

  switch (action.type) {
    case actions.ActionTypes.LOAD: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case actions.ActionTypes.LOAD_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        failed: false,
        data: action.payload
      });
    }

    case actions.ActionTypes.LOAD_FAIL: {
      return Object.assign({}, state, {
        loading: false,
        failed: true,
        data: []
      });
    }

    default: {
      return state;
    }
  }
}

export const getData = (state: State) => state.data;
export const getLoading = (state: State) => state.loading;
export const getFailed = (state: State) => state.failed;
