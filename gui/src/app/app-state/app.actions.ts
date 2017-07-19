import { Action } from '@ngrx/store';
export const prefix = '[APP] ';
export const LOAD_ASYNC_REDUCER = prefix + 'load async reducer';
export const SET_STATE = prefix + 'set state';

export class LoadAsyncReducer implements Action {
    readonly type = LOAD_ASYNC_REDUCER;

    constructor(public name: string) { }
}

export class SetStateAction implements Action {
    readonly type = SET_STATE;

    constructor(public paths: string[], public value: any) { }
}
