import { AppState } from '../app-state.interface';
import { AppStateService } from './../../../app-state/services/app-state.service';
import { Observable } from 'rxjs/Rx';
import { State } from './../state.interface';
import { Injectable } from '@angular/core';
import { UiState } from './ui-state.interface';

@Injectable()
export class UiStateModel implements State<UiState> {
    static initialState: UiState = {};

    static reducer = state => state;

    readonly key = 'ui';
    readonly paths = [this.key];

    readonly state$: Observable<UiState>;

    readonly selector = state => state.ui;

    constructor(
        private _stateService: AppStateService<AppState>
    ) {
        this.state$ = this._stateService.select(this.selector);
    }
 }
