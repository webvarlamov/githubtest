import {createAction, props} from '@ngrx/store';

export const loadListReportItems = createAction('[ListReport] Load list report items');
export const loadListReportItemsSuccess = createAction('[ListReport] Load list report items success', props<{listReportItems: any[]}>());
export const loadListReportItemsFailed = createAction('[ListReport] Load list report items failed');

