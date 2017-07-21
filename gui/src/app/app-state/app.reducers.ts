import { environment } from './../../environments/environment';
import { LOCAL_STORAGE_KEY } from 'app/constants/state.constants';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { localStorageSync, LocalStorageConfig } from 'ngrx-store-localstorage';

/**
 * The compose function is one of our most handy tools. In basic terms, you give
 * it any number of functions and it returns a function. This new function
 * takes a value and chains it through every composed function, returning
 * the output.
 *
 * More: https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
 */
import { compose } from '@ngrx/core/compose';

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';
import { appStateReducer } from 'app/app-state/app-state.reducers';

const localStorageConfig: LocalStorageConfig = { keys: [LOCAL_STORAGE_KEY] };

function reducer(rootReducer: any): ActionReducer<any> {
  return (state: any, action: any) => {
    let newtState = rootReducer(state, action);
    newtState = appStateReducer(newtState, action);
    return newtState;
  };
}

export function createReducer(rootReducer): ((state: any, action: any) => any) {
  return compose(localStorageSync(localStorageConfig))(appStateReducer);
}

export function createInitialState(state) {
  return state;
}
