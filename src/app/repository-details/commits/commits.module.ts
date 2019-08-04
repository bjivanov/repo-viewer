import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommitsComponent } from './commits.component';
import { ClarityModule } from '@clr/angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CommitsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ClarityModule
  ],
  exports: [CommitsComponent]
})
export class CommitsModule { }
