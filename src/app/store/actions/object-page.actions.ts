import {createAction, props} from '@ngrx/store';
import {ListReportItem} from '../types/list-report/list-report-item';
import {ObjectPageEffects} from '../effects/object-page-effects';
import {ObjectPageEvent} from '../types/object-page/object-page-event';

export const openObjectPage = createAction('[ObjectPage] Open object page', props<{listReportItem: ListReportItem}>());
export const objectPageClose = createAction('[ObjectPage] Close object page');
export const loadObjectPageEvents = createAction('[ObjectPage] Load object page events', props<{eventsURL: string}>());
export const loadObjectPageEventsSuccess = createAction('[ObjectPage] Load object page events success', props<{events: ObjectPageEvent[]}>());
