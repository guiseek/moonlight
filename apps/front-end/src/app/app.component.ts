import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'moonlight-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'front-end';

  api$ = this.service.get();

  constructor(
    readonly service: AppService
  ) {}
}
