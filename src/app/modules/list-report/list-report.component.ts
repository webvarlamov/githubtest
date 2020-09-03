import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectSearchInput} from '../../store/selectors/search-input.selectors';
import {searchInput} from '../../store/actions/search.actions';
import {selectListReportItems} from '../../store/selectors/list-report.selectors';
import {ListReportItem} from '../../store/types/list-report/list-report-item';
import {Router} from '@angular/router';
import {openObjectPage} from '../../store/actions/object-page.actions';

@Component({
  selector: 'app-list-report',
  templateUrl: './list-report.component.html',
  styleUrls: ['./list-report.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListReportComponent implements OnInit {
  public searchInput$ = this.store.select(selectSearchInput);
  public listReportItems$ = this.store.select(selectListReportItems);

  constructor(
    private store: Store,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSearchInputEvent(searchInputString: string) {
    this.store.dispatch(searchInput({searchInput: searchInputString}));
  }

  toObjectPage(listReportItem: ListReportItem) {
    this.store.dispatch(openObjectPage({listReportItem}));
    this.router.navigate(['object-page', listReportItem.id]);
  }
}
