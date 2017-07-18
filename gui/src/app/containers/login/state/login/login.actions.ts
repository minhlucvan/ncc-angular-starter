import { User } from 'app/entities/user/user.interface';
import { Action } from '@ngrx/store';

const PREFIX = '[LOGIN] ';
const LOGIN = PREFIX + 'login';
const LOGIN_SUCCESS = PREFIX + 'login success';
const LOGIN_FAIL = PREFIX + 'login fail';

// actions
export class LoginAction implements Action {
    static readonly type = LOGIN;
    readonly type = LOGIN;

    constructor(public email: string,
        public password: string) { }
}

export class LoginSuccessAction implements Action {
    static readonly type = LOGIN_SUCCESS;
    readonly type = LOGIN_SUCCESS;

    constructor(public user: User) { }
}

export class LoginFailAction implements Action {
    static readonly type = LOGIN_FAIL;
    readonly type = LOGIN_FAIL;

    constructor(public error: any) { }
}
