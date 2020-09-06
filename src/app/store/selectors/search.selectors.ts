import {AppState} from '../app-state';
import {createSelector} from '@ngrx/store';

export const selectSearchState = (appState: AppState) => appState.search;
export const selectSearchInput = createSelector(selectSearchState, state => {
  return state.search;
});
export const selectAvailableFilters = createSelector(selectSearchState, state => state.availableFilters);
export const selectUsedFilters = createSelector(selectSearchState, state => state.usedFilters);
export const selectPage = createSelector(selectSearchState, state => state.page);
export const selectFiltersString = createSelector(selectSearchState, (state): string => {
  return Object.entries(state.usedFilters).map(entry => entry.map((el: string) => el.toLowerCase()).join(':')).join('+');
});
