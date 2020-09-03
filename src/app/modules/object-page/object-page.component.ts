import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectDescription, selectEvents, selectTitle} from '../../store/selectors/object-page.selectors';
import {objectPageClose} from '../../store/actions/object-page.actions';

@Component({
  selector: 'app-object-page',
  templateUrl: './object-page.component.html',
  styleUrls: ['./object-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObjectPageComponent implements OnInit, OnDestroy {
  public title = this.store.select(selectTitle);
  public description = this.store.select(selectDescription);
  public events = this.store.select(selectEvents);

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.store.dispatch(objectPageClose());
  }



}
