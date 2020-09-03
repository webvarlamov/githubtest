import {Action, createReducer, on} from '@ngrx/store';
import {ListReportState} from '../types/list-report/list-report-state';
import {searchInput} from '../actions/search.actions';
import {loadListReportItemsSuccess} from '../actions/list-report.actions';

export const initialState: ListReportState = {
  listReportItems: []
};

const reducer = createReducer(initialState,
    on(loadListReportItemsSuccess, (state, action) => {
      return {...state, listReportItems: action.listReportItems};
    })
  );

export function listReportReducer(state: ListReportState, action: Action)  {
  return reducer(state, action);
}
