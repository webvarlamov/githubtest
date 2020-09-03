import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {searchInput} from '../actions/search.actions';
import {debounceTime, map, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {loadListReportItems, loadListReportItemsSuccess} from '../actions/list-report.actions';
import {Store} from '@ngrx/store';
import {selectSearchInput} from '../selectors/search-input.selectors';
import {DataProviderService} from '../../service/data-provider.service';

@Injectable()
export class ListReportEffects {

  constructor(
    private actions: Actions,
    private store: Store,
    private dataProviderService: DataProviderService
  ) {}

  onLoadListReportItems = createEffect(() => this.actions.pipe(
    ofType(searchInput),
    withLatestFrom(this.store.select(selectSearchInput)),
    debounceTime(500),
    switchMap(([action, searchString]) => this.dataProviderService.getListItems(searchString)),
    switchMap((listReportItems) => [
      loadListReportItemsSuccess({listReportItems})
    ])
  ));

}
