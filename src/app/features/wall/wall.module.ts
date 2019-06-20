import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WallComponent } from './wall/wall.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WallFooterComponent } from './wall-footer/wall-footer.component';
import { WallHeaderComponent } from './wall-header/wall-header.component';
import { LibraryComponent } from './library/library.component';


const routes: Routes = [
  {
    path: '',
    component: WallComponent
  }
];
@NgModule({
  declarations: [
    WallComponent,
    WallFooterComponent,
    WallHeaderComponent,
    LibraryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class WallModule { }
