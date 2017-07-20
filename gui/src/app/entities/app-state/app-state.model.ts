import { combineReducers } from '@ngrx/store';
import { LOCAL_STORAGE_KEY } from 'app/constants/state.constants';
import { UiStateModel } from './ui-state/ui-state.model';
import { AuthStateModel } from './auth-state/auth-state.model';
import { Observable } from 'rxjs/Rx';
import { AppStateService } from 'app/app-state/services/app-state.service';
import { AppState } from './app-state.interface';
import { Injectable } from '@angular/core';
import { State } from './state.interface';
import { AppService } from 'app/app.service';

@Injectable()
export class AppStateModel implements State<AppState> {
    static reducer = combineReducers({
        auth: AuthStateModel.reducer,
        ui: UiStateModel.reducer
    });

    static initialState = {
        auth: AuthStateModel.initialState,
        ui: UiStateModel.initialState
    };

    readonly key = LOCAL_STORAGE_KEY;
    readonly paths = [this.key];
    readonly state$: Observable<AppState>;

    selector = state => state;


    constructor(
        public app: AppService,
        private _stateService: AppStateService<AppState>,
        public authModel: AuthStateModel,
        public uiModel: UiStateModel,
    ) {
        app.log('construct AppStateModel');
        this.state$ = this._stateService.state();
    }

    set(paths: string[], value: any) {
        this._stateService.set(paths, value);
    }
}

