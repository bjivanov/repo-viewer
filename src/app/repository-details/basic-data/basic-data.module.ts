import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicDataComponent } from './basic-data.component';
import { ClarityModule } from '@clr/angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [BasicDataComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ClarityModule
  ],
  exports: [BasicDataComponent]
})
export class BasicDataModule { }
