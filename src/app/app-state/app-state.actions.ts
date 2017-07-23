import { Action } from '@ngrx/store';
export const prefix = '[APP] ';
export const SET_STATE = prefix + 'set state';

export class SetStateAction implements Action {
    readonly type = SET_STATE;

    constructor(public paths: string[], public value: any) { }
}
