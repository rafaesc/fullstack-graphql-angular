import { createSelector } from 'reselect';

import * as fromThoughts from './reducers/thoughts.reducer';
import * as fromThoughtDetails from './reducers/thought-details.reducer';
import * as fromCreate from './reducers/create.reducer';
import * as fromRemove from './reducers/remove.reducer';

export interface State {
  thoughts: fromThoughts.State;
  thoughtDetails: fromThoughtDetails.State;
  create: fromCreate.State;
  remove: fromRemove.State;
}

export const reducers = {
  thoughts: fromThoughts.reducer,
  thoughtDetails: fromThoughtDetails.reducer,
  create: fromCreate.reducer,
  remove: fromRemove.reducer,
};

/**
 * Thoughts store functions
 */
export const getThoughtsState   = (state: State) => state.thoughts;
export const getThoughts  = createSelector(getThoughtsState, fromThoughts.getData);
export const getThoughtsLoading  = createSelector(getThoughtsState, fromThoughts.getLoading);
export const getThoughtsFailed  = createSelector(getThoughtsState, fromThoughts.getFailed);

/**
 * Thought Details store functions
 */
export const getDetailsState   = (state: State) => state.thoughtDetails;
export const getDetails  = createSelector(getDetailsState, fromThoughtDetails.getData);
export const getDetailsLoading  = createSelector(getDetailsState, fromThoughtDetails.getLoading);
export const getDetailsFailed  = createSelector(getDetailsState, fromThoughtDetails.getFailed);

/**
 * Create store functions
 */
export const getCreateState   = (state: State) => state.create;
export const getCreateLoading  = createSelector(getCreateState, fromCreate.getLoading);
export const getCreateFailed  = createSelector(getCreateState, fromCreate.getFailed);

/**
 * Remove store functions
 */
export const getRemoveState   = (state: State) => state.remove;
export const getRemoveLoading  = createSelector(getRemoveState, fromRemove.getLoading);
export const getRemoveFailed  = createSelector(getRemoveState, fromRemove.getFailed);
