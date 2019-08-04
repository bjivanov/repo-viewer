import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositoryDetailsRoutingModule } from './repository-details-routing.module';
import { RepositoryDetailsComponent } from './repository-details.component';
import { BasicDataComponent } from './basic-data/basic-data.component';
import { CommitsComponent } from './commits/commits.component';
import { ClarityModule } from '@clr/angular';
import { RouterModule } from '@angular/router';
import { BasicDataModule } from './basic-data/basic-data.module';
import { CommitsModule } from './commits/commits.module';

@NgModule({
  declarations: [RepositoryDetailsComponent],
  imports: [
    CommonModule,
    RepositoryDetailsRoutingModule,
    ClarityModule,
    BasicDataModule,
    CommitsModule,
    RouterModule
  ]
})
export class RepositoryDetailsModule { }
