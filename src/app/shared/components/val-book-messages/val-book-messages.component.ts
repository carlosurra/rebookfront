import { Component, Input } from "@angular/core";
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'rb-val-book-messages',
  templateUrl: './val-book-messages.component.html',
})

export class ValAddBookComponent {
  @Input() control: FormControl;
  @Input() group: FormGroup;
}