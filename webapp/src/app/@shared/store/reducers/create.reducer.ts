import * as actions from '../actions/create.action';

export interface State {
  loading: boolean;
  failed: boolean;
}

const INITIAL_STATE: State = {
  loading: false,
  failed: false,
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
      });
    }

    case actions.ActionTypes.LOAD_FAIL: {
      return Object.assign({}, state, {
        loading: false,
        failed: true,
      });
    }

    default: {
      return state;
    }
  }
}

export const getLoading = (state: State) => state.loading;
export const getFailed = (state: State) => state.failed;
