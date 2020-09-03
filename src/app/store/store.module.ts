import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule as NgrxStoreModule } from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {listReportReducer} from './reducers/list-report.reducer';
import {searchReducer} from './reducers/search.reducer';
import {objectPageReducer} from './reducers/object-page.reducer';
import {SearchEffects} from './effects/search-effects';
import {ListReportEffects} from './effects/list-report-effects';
import {ObjectPageEffects} from './effects/object-page-effects';



@NgModule({
  declarations: [],
  imports: [
    NgrxStoreModule.forRoot({
      listReport: listReportReducer,
      search: searchReducer,
      objectPage: objectPageReducer
    }, {
      runtimeChecks : {
        strictActionImmutability: true,
        strictStateImmutability: true
      }
    }),
    EffectsModule.forRoot([
      SearchEffects,
      ListReportEffects,
      ObjectPageEffects
    ]),
    CommonModule
  ]
})
export class StoreModule { }
