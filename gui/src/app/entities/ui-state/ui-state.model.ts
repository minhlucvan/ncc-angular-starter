
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { UiState, LoadingState } from './ui-state.interface';
import { createSelector } from 'reselect';
import { AppService } from 'app/app.service';
import { State } from 'app/entities/app-state/state.interface';
import { AppStateService } from 'app/app-state/services/app-state.service';
import { AppState } from 'app/entities/app-state/app-state.interface';

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
    readonly loadingSelectorFromRoot = state => this.loadingSelector(this.selector(state));

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
