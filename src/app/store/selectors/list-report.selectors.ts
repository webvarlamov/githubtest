import {createSelector} from '@ngrx/store';
import {AppState} from '../app-state';
import {selectSearchInput} from './search.selectors';
import {ListReportItem} from '../types/list-report/list-report-item';
import {Observable} from 'rxjs';

export const selectListReportState = (appState: AppState) => appState.listReport;


export const selectListReportItems = createSelector(selectListReportState, state => {
  // @ts-ignore
  return Object.values(state.listReportItems).flat();
});

export const selectOnlyRelevantListReportItems = createSelector(
  selectListReportItems,
  selectSearchInput,
  (listReportItems, searchInput) => {
    return listReportItems.filter(item => {
      const json = JSON.stringify(item);
      if (searchInput !== undefined && searchInput !== null) {
        return searchInput.split(' ').some(s => {
          return json.includes(s);
        });
      } else {
        return true;
      }
    });
  }
);

export const selectListReportScrollTo = createSelector(selectListReportState, state => state.scrollTo);

export const selectListReportLoadingCounter = createSelector(selectListReportState, state => state.loadingCounter);
export const selectTotalCount = createSelector(selectListReportState, state => state.totalCount);
