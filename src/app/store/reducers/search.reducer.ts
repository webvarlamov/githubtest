import {Action, createReducer, on} from '@ngrx/store';
import {SearchState} from '../types/list-report/search-state';
import {searchInput} from '../actions/search.actions';

export const initialState: SearchState = {
  search: null
};

const reducer = createReducer(initialState,
  on(searchInput, (state, action) => {
    return {...state, search: action.searchInput};
  }
));

export function searchReducer(state: SearchState, action: Action)  {
  return reducer(state, action);
}
