import {createAction, props} from '@ngrx/store';

export const searchInput = createAction('[SearchInput] Search input', props<{searchInput: string}>());
