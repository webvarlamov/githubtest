import {Action, createReducer, on} from '@ngrx/store';
import {ObjectPageState} from '../types/object-page/object-page-state';
import {loadObjectPageEventsSuccess, objectPageClose, openObjectPage} from '../actions/object-page.actions';

export const initialState: ObjectPageState = {
  title: null,
  description: null,
  eventsURL: null,
  events: []
};

const reducer = createReducer(initialState,
    on(openObjectPage, (state, action) => {
      return {...state,
        title: action.listReportItem.fullName,
        description: action.listReportItem.description,
        eventsURL: action.listReportItem.eventsURL
      };
    }),
    on(loadObjectPageEventsSuccess, (state, action) => {
      return {...state,
        events: action.events
      };
    }),
    on(objectPageClose, (state, action) => {
      return initialState;
    }),
  );

export function objectPageReducer(state: ObjectPageState, action: Action)  {
  return reducer(state, action);
}
