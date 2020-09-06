import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectSearchInput} from '../../store/selectors/search.selectors';
import {searchInput} from '../../store/actions/search.actions';
import {
  selectListReportLoadingCounter, selectListReportScrollTo,
  selectOnlyRelevantListReportItems, selectTotalCount
} from '../../store/selectors/list-report.selectors';
import {ListReportItem} from '../../store/types/list-report/list-report-item';
import {Router} from '@angular/router';
import {debounceTime, distinct, filter, map, shareReplay, switchMap, tap} from 'rxjs/operators';
import {listReportScrollTo, loadMoreListReportItems} from '../../store/actions/list-report.actions';
import {fromEvent, Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-list-report',
  templateUrl: './list-report.component.html',
  styleUrls: ['./list-report.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListReportComponent implements OnInit, AfterViewInit, OnDestroy {
  public fromScrollEvent$: Observable<any>;
  public searchInput$ = this.store.select(selectSearchInput);
  public listReportItems$: Observable<ListReportItem[]> = this.store.select(selectOnlyRelevantListReportItems);
  public totalCount$ = this.store.select(selectTotalCount);
  public listReportIsLoading$ = this.store.select(selectListReportLoadingCounter).pipe(
    map(count => count > 0)
  );
  public scrollTo$ = this.store.select(selectListReportScrollTo);
  public scrollAfterInitSubscription: Subscription;
  public lazyLoadingSubscription: Subscription;

  @ViewChild('repoListWrapper', {static: true})
  public repoListWrapper: ElementRef;

  constructor(
    private store: Store,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.lazyLoadingSubscription.unsubscribe();
    this.scrollAfterInitSubscription.unsubscribe();
  }

  ngAfterViewInit() {
    this.fromScrollEvent$ = this.createListReportScrollObservable();
    this.lazyLoadingSubscription = this.createLazyLoadingSubscription();
    this.scrollAfterInitSubscription = this.createScrollAfterInitSubscription();
    this.scrollListReport();
  }

  private createLazyLoadingSubscription(): Subscription {
    return this.listReportItems$.pipe(
      switchMap(items => this.fromScrollEvent$.pipe(
        debounceTime(500),
        map((event: MouseEvent) => {
          const scrollHeight = (event.target as HTMLElement).scrollTop;
          const elementHeight = (event.target as HTMLElement).scrollHeight - (event.target as HTMLElement).clientHeight;
          return [scrollHeight, elementHeight];
        }),
        filter(arr => arr[0] === arr[1]),
        map(arr => arr[0]),
        distinct(),
      ))
    ).subscribe(next => {
      this.store.dispatch(loadMoreListReportItems());
    });
  }

  onSearchInputEvent(searchInputString: string) {
    this.store.dispatch(searchInput({searchInput: searchInputString}));
  }

  toObjectPage(listReportItem: ListReportItem) {
    this.router.navigate(['object-page', listReportItem.id]);
  }

  identify(index, item: ListReportItem) {
    return item.id;
  }

  private scrollListReport() {
    this.scrollTo$.subscribe(
      y => (this.repoListWrapper.nativeElement as HTMLElement).scrollTo(0, y)
    ).unsubscribe();
  }

  private createListReportScrollObservable(): Observable<any> {
    return fromEvent(this.repoListWrapper.nativeElement, 'scroll').pipe(
      debounceTime(500),
      shareReplay({refCount: true, bufferSize: 1})
    );
  }

  private createScrollAfterInitSubscription() {
    return this.fromScrollEvent$
      .pipe(map(e => (e.target as HTMLElement).scrollTop))
      .subscribe(scrollTo => {
        this.store.dispatch(listReportScrollTo({ scrollTo }));
      });
  }
}
