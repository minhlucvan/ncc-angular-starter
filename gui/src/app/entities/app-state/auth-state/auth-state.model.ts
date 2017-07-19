import { User } from 'app/entities/user/user.interface';
import { Permission } from 'app/entities/permission/permission.interface';
import { createSelector } from 'reselect';
import { AppState } from '../app-state.interface';
import { AppStateService } from 'app/app-state/services/app-state.service';
import { Observable } from 'rxjs/Rx';
import { State } from './../state.interface';
import { Injectable } from '@angular/core';
import { AuthState, LoginStatus, STATUS_UNLOGIN } from './auth-state.interface';

@Injectable()
export class AuthStateModel implements State<AuthState> {
    static initialState: AuthState = {
        status: STATUS_UNLOGIN,
        user: null,
        token: null
    };

    static reducer = state => state;

    readonly key = 'auth';
    readonly paths = [this.key];

    readonly state$: Observable<AuthState>;
    readonly user$: Observable<User>;
    readonly token$: Observable<string>;
    readonly status$: Observable<LoginStatus>;
    readonly permissions$: Observable<Permission[]>;

    readonly selector = state => state.auth;
    readonly userSelector = state => state.user;
    readonly tokenSelector = state => state.token;
    readonly statusSelector = state => state.status;
    readonly permissionsSelector = state => state.permissions;

    // tslint:disable-next-line:member-ordering
    readonly userSelectorFromRoot = createSelector(this.selector, this.userSelector);
    // tslint:disable-next-line:member-ordering
    readonly tokenSelectorFromRoot = createSelector(this.selector, this.tokenSelector);
    // tslint:disable-next-line:member-ordering
    readonly statusSelectorFromRoot = createSelector(this.selector, this.statusSelector);
    // tslint:disable-next-line:member-ordering
    readonly permissionsSelectorFromRoot = createSelector(this.selector, this.permissionsSelector);

    constructor(
        private _stateService: AppStateService<AppState>
    ) {
        this.state$ = this._stateService.select(this.selector);
        this.user$ = this._stateService.select(this.userSelectorFromRoot);
        this.user$ = this._stateService.select(this.tokenSelectorFromRoot);
        this.user$ = this._stateService.select(this.statusSelectorFromRoot);
        this.permissions$ = this._stateService.select(this.permissionsSelectorFromRoot);
    }

    setUser( user: User ) {
        this._set([...this.paths, 'user'], user);
    }

    setToken( token: string ) {
        this._set([...this.paths, 'token'], token);
    }

    setStatus( status: LoginStatus) {
        this._set([...this.paths, 'status'], status);
    }

    setPermission( permissions: Permission[]) {
        this._set([...this.paths, 'permissions'], permissions);
    }

    _set(paths: string[], value: any) {
        this._stateService.set(paths, value);
    }

}
