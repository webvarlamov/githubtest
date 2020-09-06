import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {selectAvailableFilters, selectUsedFilters} from '../../../../store/selectors/search.selectors';
import {searchFilterChange} from '../../../../store/actions/search.actions';

@Component({
  selector: 'app-search-settings',
  templateUrl: './search-settings.component.html',
  styleUrls: ['./search-settings.component.scss']
})
export class SearchSettingsComponent implements OnInit {
  public availableFilters$ = this.store.select(selectAvailableFilters);
  public usedFilters$ = this.store.select(selectUsedFilters);

  constructor(
    private store: Store
  ) {}

  ngOnInit(): void {
  }

  onSearchFilterChange(key, value) {
    this.store.dispatch(searchFilterChange({key, value}));
  }
}
