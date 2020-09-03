import {AppState} from '../app-state';
import {createSelector} from '@ngrx/store';

export const selectObjectPageState = (appState: AppState) => appState.objectPage;
export const selectTitle = createSelector(selectObjectPageState, state => state.title);
export const selectDescription = createSelector(selectObjectPageState, state => state.description);
export const selectEvents = createSelector(selectObjectPageState, state => state.events);
