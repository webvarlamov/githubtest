import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {searchInput} from '../actions/search.actions';
import {debounceTime, switchMap} from 'rxjs/operators';
import {loadListReportItems} from '../actions/list-report.actions';

@Injectable()
export class SearchEffects {

  constructor(
    private actions: Actions
  ) { }

  onSearchInput = createEffect(() => this.actions.pipe(
    ofType(searchInput),
    switchMap(action => {
      if (action.searchInput !== undefined && action.searchInput !== null && action.searchInput.length > 0) {
        return [loadListReportItems()];
      } else {
        return [];
      }
    })
  ));
}
