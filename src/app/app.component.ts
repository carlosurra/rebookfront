import { Component } from '@angular/core';
import { fadeAnimation } from './animations';
import { LoaderService } from './core/services/loader.service';

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent {
  title = 'rebook-front';

  constructor(public loaderService: LoaderService) {}
}
