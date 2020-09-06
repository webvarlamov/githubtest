import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {searchFilterChange, searchInput} from '../actions/search.actions';
import {debounceTime, switchMap} from 'rxjs/operators';
import {clearListReportItems, loadListReportItems, loadMoreListReportItems} from '../actions/list-report.actions';

@Injectable()
export class SearchEffects {

  constructor(
    private actions: Actions
  ) { }

  onSearchInput = createEffect(() => this.actions.pipe(
    ofType(searchInput),
    debounceTime(500),
    switchMap((action) => {
      if (action.searchInput !== undefined && action.searchInput !== null && action.searchInput.length > 0) {
        return [loadListReportItems()];
      } else {
        return [clearListReportItems()];
      }
    })
  ));

  onFilterChange = createEffect(() => this.actions.pipe(
    ofType(searchFilterChange),
    debounceTime(500),
    switchMap(action => {
      return [clearListReportItems(), loadListReportItems()];
    })
  ));

  onLoadMore = createEffect(() => this.actions.pipe(
    ofType(loadMoreListReportItems),
    switchMap(action => {
      return [loadListReportItems()];
    })
  ));
}
