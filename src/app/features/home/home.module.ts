import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeFormComponent } from './home-form/home-form.component';
import { HomeMediaComponent } from './home-media/home-media.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
      HomeComponent,
      HomeFormComponent,
      HomeMediaComponent,
      HomeHeaderComponent,
      HomeFooterComponent
    ],
  imports: [
      CommonModule,
      RouterModule.forChild(routes),
      SharedModule,
    ]
})
export class HomeModule {}
