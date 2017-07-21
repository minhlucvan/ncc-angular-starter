import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { UiStateModel } from 'app/entities/ui-state/ui-state.model';
import { Subscription, Observable } from 'rxjs/Rx';
import { SubBag } from 'app/entities/Subs/subs.models';
import { AppStateModel } from 'app/entities/app-state/app-state.model';
import { AppStateService } from 'app/app-state/services/app-state.service';
import { AppState } from 'app/entities/app-state/app-state.interface';
import { LoadingState } from 'app/entities/ui-state/ui-state.interface';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})


export class LoadingComponent implements OnInit, OnDestroy {

  show: boolean;

  private _subBag: SubBag = new SubBag();

  constructor(
    private _uiState: UiStateModel,
    private _zone: NgZone
  ) {}

  ngOnInit() {
    this._subBag.subs['ui_state'] = this._uiState.loading$.subscribe(this._setState.bind(this), console.error, console.info);
  }

  ngOnDestroy(): void {
    this._subBag.unsubscribe();
  }

  private _setState(state: LoadingState) {
    this.show = state.show;
  }
}
