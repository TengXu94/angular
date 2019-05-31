import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownDirective } from './dropdown.directive';
import { AlertComponent } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    DropdownDirective,
    AlertComponent,

    LoadingSpinnerComponent,
  ],
  exports: [
    CommonModule,
    DropdownDirective,
    AlertComponent,

    LoadingSpinnerComponent,
  ]
})
export class SharedModule {}
