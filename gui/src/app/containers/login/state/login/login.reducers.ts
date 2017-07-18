import { Action } from '@ngrx/store';
import { LoginAction } from './login.actions';
import { LoginState, initialState } from './login.state';

const loginHandler = (state: LoginState = initialState, action: Action): LoginState => {
    return state;
};

const loginSuccessHandler = (state: LoginState = initialState, action: Action): LoginState => {
    return state;
};

const loginFailHandler = (state: LoginState = initialState, action: Action): LoginState => {
    return state;
};

const handlers = {
    [LoginAction.type]: loginHandler,
    [LoginAction.type]: loginSuccessHandler,
    [LoginAction.type]: loginFailHandler
};

export function LoginReducer (state: LoginState = initialState, action: Action): LoginState {
    const handler = handlers[action.type];
    return handler ? handler(state, action) : state;
}

