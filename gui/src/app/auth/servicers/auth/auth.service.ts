import { Injectable, EventEmitter } from '@angular/core';
import { AuthStateModel } from 'app/entities/app-state/auth-state/auth-state.model';
import { Observable } from 'rxjs/Rx';
import { AuthState, STATUS_LOGIN, LoginStatus } from 'app/entities/app-state/auth-state/auth-state.interface';
import { ApiService, Response } from 'app/gateway/servicers/api.service';
import { API } from 'app/constants/api.constants';

interface BaseEvent {
  res: Response;
}

export interface LoginEvent extends BaseEvent { }
export interface AuthFailEvent extends BaseEvent { }
export interface LogoutEvent extends BaseEvent { }
export interface TokenChaneEvent extends BaseEvent { }
export interface TokenExpriedEvent extends BaseEvent { }

@Injectable()
export class AuthService {
  onLogin: Observable<LoginEvent>;
  onAuthFail: Observable<AuthFailEvent>;
  onLogout: Observable<LogoutEvent>;
  onTokenRefresh: Observable<TokenChaneEvent>;
  onTokenExprired: Observable<TokenExpriedEvent>;

  private _state: AuthState;

  constructor(
    private _authState: AuthStateModel,
    private _api: ApiService
  ) {
    this._authState.state$.subscribe(this._setState);
    this.onLogin = this._authState.status$
      .takeWhile((status: LoginStatus) => (status === STATUS_LOGIN))
      .map((status: LoginStatus) => (<LoginEvent>{}));
  }

  login(email: string, password: string): Observable<LoginEvent> {
    const body = {
      email,
      password
    };
    return this._api.post(API.auth.login, body, { auth: false })
      .takeWhile(this._successLoginResponse)
      .do(this._setTokenTtl)
      .do(this._fireLoginEvent)
      .flatMap(() => this.onLogin);
  }

  logout(): Observable<Response> {
    return this._api.get(API.auth.logout);
  }

  refreshToken(): Observable<TokenChaneEvent> {
    const body = {
      token: this._state.token
    };

    return this._api.post(API.auth.login, body)
      .do(this._setTokenTtl)
      .do(this._fireLoginEvent)
      .flatMap(() => this.onTokenRefresh);
  }

  /** check login success */
  private _successLoginResponse(res: Response) {
    return !!res;
  }

  /** set time out for token expried */
  private _setTokenTtl() {

  }

  /** fire login success event */
  private _fireLoginEvent() {

  }

  /** set auth state */
  private _setState(state: AuthState) {
    this._state = state;
  }
}
