import { Component } from '@angular/core';
import { BusyService } from 'app/shared/services/busy/busy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private _busyService: BusyService
  ) { }
}
