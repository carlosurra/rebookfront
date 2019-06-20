import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { RegisterComponent } from './shared/components/register/register.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AddBookComponent } from './shared/components/add-book/add-book.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './features/home/home.module#HomeModule',
  },
  {
    path: 'wall',
    canActivate: [AuthGuard],
    loadChildren: './features/wall/wall.module#WallModule'
  },
  {
    path: 'about',
    loadChildren: './features/about/about.module#AboutModule'
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'addbook',
    component: AddBookComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
