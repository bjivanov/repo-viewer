import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositoriesRoutingModule } from './repositories-routing.module';
import { RepositoriesComponent } from './repositories.component';
import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RepositoriesComponent],
  imports: [
    CommonModule,
    FormsModule,
    RepositoriesRoutingModule,
    ClarityModule
  ]
})
export class RepositoriesModule { }
