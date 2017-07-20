import { AppState } from '../app-state.interface';
import { AppStateService } from './../../../app-state/services/app-state.service';
import { Observable } from 'rxjs/Rx';
import { State } from './../state.interface';
import { Injectable } from '@angular/core';
import { UiState } from './ui-state.interface';
import { createSelector } from "reselect/lib";
import { AppService } from "app/app.service";

export interface LoadingState {
    show: boolean;
}

@Injectable()
export class UiStateModel implements State<UiState> {
    static initialState: UiState = {
        loading: {
            show: false
        }
    };

    static reducer = state => state;

    readonly key = 'ui';
    readonly paths = [this.key];

    readonly state$: Observable<UiState>;
    readonly loading$: Observable<LoadingState>;

    readonly selector = state => state.ui;
    readonly loadingSelector = state => state.loading;

    // tslint:disable-next-line:member-ordering
    readonly loadingSelectorFromRoot = createSelector(this.selector, this.loadingSelector);

    constructor(
        private _stateService: AppStateService<AppState>,
        public app: AppService
    ) {
        app.log('Construct UiStateModel');
        this.state$ = this._stateService.select(this.selector);
        this.loading$ = this._stateService.select(this.loadingSelectorFromRoot);
    }

    setLoading(value: LoadingState) {
        this._set([...this.paths, 'loading'], value);
    }

    showLoading() {
        this._set([...this.paths, 'loading', 'show'], true);
    }

    hideLoading() {
        this._set([...this.paths, 'loading', 'show'], false);
    }

    private _set(paths: string[], value: any) {
        this._stateService.set(paths, value);
    }
}
