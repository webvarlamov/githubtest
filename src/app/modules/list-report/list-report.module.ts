import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListReportComponent } from './list-report.component';
import {RouterModule} from '@angular/router';
import {LogoComponent} from '../shared-components/logo/logo.component';
import {SharedComponentsModule} from '../shared-components/shared-components.module';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SearchSettingsComponent } from './components/search-settings/search-settings.component';



@NgModule({
  declarations: [ListReportComponent, SearchFormComponent, SearchSettingsComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ListReportComponent
      }
    ]),
    CommonModule,
    SharedComponentsModule
  ],
  exports: [
    RouterModule
  ]
})
export class ListReportModule {}
