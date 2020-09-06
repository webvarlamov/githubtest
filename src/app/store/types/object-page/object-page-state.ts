import {ObjectPageEvent} from './object-page-event';
import {ObjectPageContent} from './object-page-content';

export interface ObjectPageState {
  events: ObjectPageEvent[];
  content: ObjectPageContent;
}
