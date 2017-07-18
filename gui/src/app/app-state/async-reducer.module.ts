import { LoadAsyncReducer } from './app.actions';
import { initReducers } from './app.reducers';
import { async } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { environment } from './../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers, ActionReducer } from '@ngrx/store';
import { compose } from '@ngrx/core';
import { Inject, ModuleWithProviders, NgModule } from '@angular/core';

@NgModule()
export class AsyncReducerModule {
    static add(name: string, reducer: any): ModuleWithProviders {
        return {
            ngModule: AsyncReducerModule,
            providers: [
                { provide: 'reducer', useValue: reducer },
                { provide: 'name', useValue: name }
            ]
        };
    }

    constructor(
        private store: Store<any>,
        @Inject('name') private name: string,
        @Inject('reducer') private reducer: any
    ) {
        this.injectAsyncReducer(store, name, reducer);
        this.store.dispatch(new LoadAsyncReducer(name));
    }

    injectAsyncReducer(store, name, asyncReducer) {
        if (!store.asyncReducers) {
            store.asyncReducers = {};
        }
        store.asyncReducers[name] = asyncReducer;
        store.replaceReducer(this.createReducer(store._reducer.value, store.asyncReducers));
    }

    createReducer(currentReducer, asyncReducers): ActionReducer<any> {
        const reducers = {
            ...initReducers,
            ...asyncReducers
        };

        const developmentReducer: ActionReducer<any> = compose(storeFreeze, combineReducers)(reducers);
        const productionReducer: ActionReducer<any> = combineReducers(reducers);

        if (environment.production) {
            return productionReducer;
        } else {
            return developmentReducer;
        }
    }
}
