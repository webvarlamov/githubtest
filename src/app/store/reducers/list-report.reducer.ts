import {Action, createReducer, on} from '@ngrx/store';
import {ListReportState} from '../types/list-report/list-report-state';
import {searchFilterChange, searchInput} from '../actions/search.actions';
import {clearListReportItems, listReportScrollTo, loadListReportItems, loadListReportItemsSuccess} from '../actions/list-report.actions';

export const initialState: ListReportState = {
  totalCount: 0,
  scrollTo: 0,
  listReportItems: {},
  loadingCounter: 0
};

const reducer = createReducer(initialState,
    on(loadListReportItems, (state, action) => {
      return {...state, loadingCounter: state.loadingCounter + 1};
    }),
    on(loadListReportItemsSuccess, (state, action) => {
      const newListReportItems = {...state.listReportItems};
      newListReportItems[action.page] = action.listReportItems;
      return {
        ...state,
        listReportItems: newListReportItems,
        loadingCounter: state.loadingCounter - 1,
        totalCount: action.totalCount
      };
    }),
    on(listReportScrollTo, (state, action) => {
      return {...state, scrollTo: action.scrollTo};
    }),
    on(clearListReportItems, (state, action) => {
      return {...state, listReportItems: {}};
    })
  );

export function listReportReducer(state: ListReportState, action: Action)  {
  return reducer(state, action);
}
