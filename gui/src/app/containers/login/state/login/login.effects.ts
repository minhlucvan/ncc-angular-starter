import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';

import { LoginAction } from './login.actions';

@Injectable()
export class LoginEffects {

  @Effect()
  login$: Observable<Action> = this.actions$
    .ofType(LoginAction.type)
    .debounceTime(300);

    constructor(private actions$: Actions) { }
}
