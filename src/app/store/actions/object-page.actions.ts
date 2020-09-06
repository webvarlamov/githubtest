import {createAction, props} from '@ngrx/store';
import {ObjectPageEvent} from '../types/object-page/object-page-event';
import {ObjectPageContent} from '../types/object-page/object-page-content';

export const loadObjectPageEvents = createAction('[ObjectPage] Load object page events', props<{eventsURL: string}>());
export const loadObjectPageEventsSuccess = createAction('[ObjectPage] Load object page events success', props<{events: ObjectPageEvent[]}>());
export const loadObjectPageContent = createAction('[ObjectPage] Load object page content', props<{id: string}>());
export const loadObjectPageContentSuccess = createAction('[ObjectPage] Load object page content success', props<{objectPageContent: ObjectPageContent}>());
export const clearObjectPageContent = createAction('[ObjectPage] Clear object page content');
