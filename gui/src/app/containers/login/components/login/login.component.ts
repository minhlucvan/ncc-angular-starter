import { createSelector } from 'reselect';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { LoginState } from '../../state/login/login.state';
import { selectLogin, selectOneOfGreedings } from '../../state/login/login.selectors';
import { AppState } from 'app/app-state/app.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public greeding$: Observable<string> = null;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.greeding$ = this.store.select<string>(createSelector(selectLogin, selectOneOfGreedings));
  }

}
