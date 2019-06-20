import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'rb-val-messages',
  templateUrl: './val-messages.component.html',
  styleUrls: ['./val-messages.component.scss']
})
export class ValMessagesComponent {
@Input() control: FormControl;
@Input() group: FormGroup;
}
