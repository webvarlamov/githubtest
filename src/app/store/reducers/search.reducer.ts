import {Action, createReducer, on} from '@ngrx/store';
import {SearchState} from '../types/list-report/search-state';
import {searchFilterChange, searchInput} from '../actions/search.actions';
import {clearListReportItems, loadMoreListReportItems} from '../actions/list-report.actions';

export const initialState: SearchState = {
  search: null,
  usedFilters: {},
  page: 1,
  availableFilters: {
    language: [
      null,
      'Java',
      'Kotlin',
      'JavaScript',
      'Python',
      'TypeScript'
    ],
    private: [
      null,
      'false',
      'true'
    ]
  }
};

const reducer = createReducer(initialState,
  on(searchInput, (state, action) => {
    return {...state, search: action.searchInput, page: 1};
  }),
  on(loadMoreListReportItems, (state, action) => {
    return {...state, page: state.page + 1};
  }),
  on(searchFilterChange, (state, action) => {
    const usedFilters = {...state.usedFilters};
    if (action.value === 'null') {
      delete usedFilters[action.key];
    } else {
      usedFilters[action.key] = action.value;
    }
    return {...state, usedFilters};
  }),
  on(clearListReportItems, (state, action) => {
    return {...state, page: 0};
  })
);

export function searchReducer(state: SearchState, action: Action)  {
  return reducer(state, action);
}
