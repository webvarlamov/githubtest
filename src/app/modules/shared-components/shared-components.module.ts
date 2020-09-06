import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [LogoComponent, LoadingSpinnerComponent],
  exports: [LogoComponent, LoadingSpinnerComponent],
  imports: [
    CommonModule
  ]
})
export class SharedComponentsModule { }
