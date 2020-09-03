import {createSelector} from '@ngrx/store';
import {AppState} from '../app-state';

export const selectListReportState = (appState: AppState) => appState.listReport;
export const selectListReportItems = createSelector(selectListReportState, state => state.listReportItems);
