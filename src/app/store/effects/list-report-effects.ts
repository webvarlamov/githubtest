import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, concatMap, debounceTime, map, mergeMap, switchMap, take, tap, withLatestFrom} from 'rxjs/operators';
import {loadListReportItems, loadListReportItemsSuccess} from '../actions/list-report.actions';
import {Store} from '@ngrx/store';
import {selectFiltersString, selectPage, selectSearchInput, selectUsedFilters} from '../selectors/search.selectors';
import {DataProviderService} from '../../service/data-provider.service';
import {of} from 'rxjs';

@Injectable()
export class ListReportEffects {

  constructor(
    private actions: Actions,
    private store: Store,
    private dataProviderService: DataProviderService
  ) {}

  onLoadListReportItems = createEffect(() => this.actions.pipe(
    ofType(loadListReportItems),
    withLatestFrom(
      this.store.select(selectSearchInput),
      this.store.select(selectFiltersString),
      this.store.select(selectPage)
    ),
    mergeMap(([action, searchString, filtersString, page]) => this.dataProviderService.getListItems(searchString, page, filtersString).pipe(
      take(1),
      mergeMap((listReportData) => [
        loadListReportItemsSuccess({
          listReportItems: listReportData.items,
          page,
          totalCount: listReportData.totalCount
        })
      ]),
      catchError(() => of(loadListReportItemsSuccess({listReportItems: [], page, totalCount: 0}))
    ))
  )));

}
