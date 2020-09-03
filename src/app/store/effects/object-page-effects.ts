import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {DataProviderService} from '../../service/data-provider.service';
import {loadObjectPageEvents, loadObjectPageEventsSuccess, openObjectPage} from '../actions/object-page.actions';
import {filter, switchMap} from 'rxjs/operators';
import {loadListReportItemsSuccess} from '../actions/list-report.actions';

@Injectable()
export class ObjectPageEffects {
  constructor(
    private actions: Actions,
    private store: Store,
    private dataProviderService: DataProviderService
  ) {}

  onOpenObjectPage = createEffect(() => this.actions.pipe(
    ofType(openObjectPage),
    filter(action => action.listReportItem.eventsURL !== undefined),
    switchMap(action => {
      return [loadObjectPageEvents({eventsURL: action.listReportItem.eventsURL})];
    })
  ));

  onloadObjectPageEvents = createEffect(() => this.actions.pipe(
    ofType(loadObjectPageEvents),
    switchMap(action => {
      return this.dataProviderService.getEventList(action.eventsURL);
    }),
    switchMap(events => [loadObjectPageEventsSuccess({events})])
  ));
}
