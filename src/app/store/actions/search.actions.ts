import {createAction, props} from '@ngrx/store';

export const searchInput = createAction('[Search] Search input', props<{searchInput: string}>());
export const searchFilterChange = createAction('[Search] Search filter change', props<{key: string, value: string}>());
