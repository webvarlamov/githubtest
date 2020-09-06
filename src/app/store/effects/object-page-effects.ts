import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {DataProviderService} from '../../service/data-provider.service';
import {
  loadObjectPageContent,
  loadObjectPageContentSuccess,
  loadObjectPageEvents,
  loadObjectPageEventsSuccess
} from '../actions/object-page.actions';
import {switchMap, tap} from 'rxjs/operators';

@Injectable()
export class ObjectPageEffects {
  constructor(
    private actions: Actions,
    private store: Store,
    private dataProviderService: DataProviderService
  ) {}

  onloadObjectPageEvents = createEffect(() => this.actions.pipe(
    ofType(loadObjectPageEvents),
    switchMap(action => {
      return this.dataProviderService.getEventList(action.eventsURL);
    }),
    switchMap(events => [loadObjectPageEventsSuccess({events})])
  ));

  onLoadObjectPageContent = createEffect(() => this.actions.pipe(
    ofType(loadObjectPageContent),
    switchMap(action => this.dataProviderService.getObjectPageContent(action.id)),
    switchMap(objectPageContent => {
      return [
        loadObjectPageContentSuccess({ objectPageContent }),
        loadObjectPageEvents({eventsURL: objectPageContent.eventsURL})
      ];
    })
  ));
}
