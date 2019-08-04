import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoryDetailsComponent } from './repository-details.component';
import { CommitsComponent } from './commits/commits.component';
import { BasicDataComponent } from './basic-data/basic-data.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'details'
  },
  {
    path: ':tab',
    component: RepositoryDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepositoryDetailsRoutingModule { }
