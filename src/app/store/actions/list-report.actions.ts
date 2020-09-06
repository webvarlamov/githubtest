import {createAction, props} from '@ngrx/store';

export const loadListReportItems = createAction('[ListReport] Load list report items');
export const loadListReportItemsSuccess = createAction('[ListReport] Load list report items success', props<{listReportItems: any[], page: number, totalCount: number}>());
export const loadListReportItemsFailed = createAction('[ListReport] Load list report items failed');
export const clearListReportItems = createAction('[ListReport] Clear list report items');
export const loadMoreListReportItems = createAction('[ListReport] Load more list report items');
export const listReportScrollTo = createAction('[ListReport] Scroll to', props<{scrollTo: number}>());

