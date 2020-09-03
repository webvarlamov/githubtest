import {ObjectPageEvent} from './object-page-event';

export interface ObjectPageState {
  title: string;
  description: string;
  eventsURL: string;
  events: ObjectPageEvent[];
}
