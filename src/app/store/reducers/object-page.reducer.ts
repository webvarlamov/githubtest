import {Action, createReducer, on} from '@ngrx/store';
import {ObjectPageState} from '../types/object-page/object-page-state';
import {clearObjectPageContent, loadObjectPageContentSuccess, loadObjectPageEventsSuccess} from '../actions/object-page.actions';

export const initialState: ObjectPageState = {
  events: [],
  content: null
};

const reducer = createReducer(initialState,
    on(loadObjectPageEventsSuccess, (state, action) => {
      return {...state,
        events: action.events
      };
    }),
    on(loadObjectPageContentSuccess, (state, action) => {
      return {...state, content: action.objectPageContent};
    }),
    on(clearObjectPageContent, (state, action) => {
      return {...initialState};
    })
  );

export function objectPageReducer(state: ObjectPageState, action: Action)  {
  return reducer(state, action);
}
