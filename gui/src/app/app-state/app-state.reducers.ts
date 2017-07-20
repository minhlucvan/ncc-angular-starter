import { SET_STATE, SetStateAction } from './app.actions';
import { Action } from '@ngrx/store';
import * as _ from 'lodash';

function setStateHandler(state: any, action: Action) {
    const setState = <SetStateAction>action;
    const paths = setState.paths;
    const value = setState.value;

    const nextState = _.set(state, paths.join('.'), value);
    return Object.assign({}, nextState);
}

const handlers = {
    [SET_STATE]: setStateHandler
};

export function appStateReducer(state: any = {}, action: Action) {
    const handler = handlers[action.type];
    return handler ? handler(state, action) : state;
}
