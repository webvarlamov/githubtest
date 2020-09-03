import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectPageComponent } from './object-page.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [ObjectPageComponent],
  imports: [
    RouterModule.forChild([
      {
        path: ':id',
        component: ObjectPageComponent
      }
    ]),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class ObjectPageModule { }
