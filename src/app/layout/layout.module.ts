import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    ModalComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ModalComponent
  ]
})
export class LayoutModule { }
