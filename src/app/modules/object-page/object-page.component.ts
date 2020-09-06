import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {
  selectEvents,
  selectObjectPageContent,
} from '../../store/selectors/object-page.selectors';
import {ActivatedRoute} from '@angular/router';
import {filter, map, tap} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {clearObjectPageContent, loadObjectPageContent, loadObjectPageEvents} from '../../store/actions/object-page.actions';

@Component({
  selector: 'app-object-page',
  templateUrl: './object-page.component.html',
  styleUrls: ['./object-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObjectPageComponent implements OnInit, OnDestroy {
  public events$ = this.store.select(selectEvents);
  public objectPageContent$ = this.store.select(selectObjectPageContent);
  private idParamSubscription: Subscription;

  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) {
    this.idParamSubscription = this.createRouterIDParamSubscription();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.store.dispatch(clearObjectPageContent());
    this.idParamSubscription.unsubscribe();
  }

  createRouterIDParamSubscription() {
    return this.route.params.pipe(
      filter(params => params !== undefined && params !== null),
      map(param => param.id),
      filter(id => id !== undefined),
    ).subscribe(id => {
      this.store.dispatch(loadObjectPageContent({id}));
    });
  }
}
