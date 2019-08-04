import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './common/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'repositories', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  {
    path: 'repositories',
    canActivate: [AuthGuard],
    pathMatch: 'full',
    loadChildren: () => import('./repositories/repositories.module').then(m => m.RepositoriesModule)
  },
  {
    path: 'repositories/:repository',
    canActivate: [AuthGuard], 
    loadChildren: () => import('./repository-details/repository-details.module').then(m => m.RepositoryDetailsModule)
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
