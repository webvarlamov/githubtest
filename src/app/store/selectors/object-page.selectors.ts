import {AppState} from '../app-state';
import {createSelector} from '@ngrx/store';

export const selectObjectPageState = (appState: AppState) => appState.objectPage;
export const selectEvents = createSelector(selectObjectPageState, state => state.events);
export const selectObjectPageContent = createSelector(selectObjectPageState, state => state.content);
