import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ObjectPageModule} from './modules/object-page/object-page.module';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-report',
    pathMatch: 'full'
  },
  {
    path: 'list-report',
    loadChildren: () => import('./modules/list-report/list-report.module').then(m => m.ListReportModule)
  },
  {
    path: 'object-page',
    loadChildren: () => import('./modules/object-page/object-page.module').then(m => ObjectPageModule)
  },
  { path: '**', redirectTo: 'list-report' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
