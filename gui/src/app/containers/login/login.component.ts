import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { AppStateModel } from 'app/entities/app-state/app-state.model';
import { AuthStateModel } from 'app/entities/app-state/auth-state/auth-state.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public greeding$: Observable<string> = null;

  constructor(
    private _appState: AppStateModel,
    private _authState: AuthStateModel
  ) { }

  // tslint:disable-next-line:member-ordering
  ngOnInit() {
    this._appState.state$.subscribe(console.log);
    this._authState.state$.subscribe(console.info);
    this._authState.setStatus( 'LOGIN' );
  }

}
