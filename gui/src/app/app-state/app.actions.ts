import { Action } from '@ngrx/store';
const prefix = '[APP] ';
const LOAD_ASYNC_REDUCER = prefix + 'load async reducer';

export class LoadAsyncReducer implements Action {
    static readonly type = LOAD_ASYNC_REDUCER;
    readonly type = LOAD_ASYNC_REDUCER;

    constructor(public name: string) { }
}
