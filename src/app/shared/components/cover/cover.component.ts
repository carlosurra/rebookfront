import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Library } from '../../../core/core.models';

@Component({
  selector: 'rb-cover',
  template: `
    <img
      class="img-responsive"
      *ngIf="imageUrl"
      [src]="imageUrl"
      [ngStyle]="{ width: width, height: height, 'min-width': width }"
    />
  `
})
export class CoverComponent implements OnChanges {
  imageUrl = '';

  @Input() library: Library;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.library && changes.library.currentValue !== undefined) {
      this.imageUrl =
        changes.library.currentValue ||
        `https://api.adorable.io/avatars/128/${changes.library.currentValue.uuid}`;
    }
  }
}
