import {AppState} from '../app-state';
import {createSelector} from '@ngrx/store';

export const selectSearchState = (appState: AppState) => appState.search;
export const selectSearchInput = createSelector(selectSearchState, state => state.search);
