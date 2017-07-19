import { LoadAsyncReducer } from './app.actions';
import { Store } from '@ngrx/store';
import { ActionReducer } from '@ngrx/store';
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
        this.injectAsyncReducer(this.store, this.name, this.reducer);
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
        const reducer: ActionReducer<any> = compose(currentReducer, asyncReducers);
       return reducer;
    }
}
