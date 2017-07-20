import { Component, OnInit, OnDestroy } from '@angular/core';
import { UiStateModel, LoadingState } from 'app/entities/app-state/ui-state/ui-state.model';
import { Subscription } from 'rxjs/Rx';
import { SubBag } from 'app/entities/Subs/subs.models';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})


export class LoadingComponent implements OnInit, OnDestroy {

  show = false;
  show$: any;

  private _subBag: SubBag = new SubBag();

  constructor(
    private _uiState: UiStateModel
  ) {
  }

  ngOnInit() {
    this._subBag.subs['ui_state'] = this._uiState.loading$.subscribe(this._setState, console.error, console.info);
    setInterval(() => {
      // this._uiState.showLoading();
       this._uiState.setLoading({show: !this.show});
    }, 3000);
  }

  ngOnDestroy(): void {
    this._subBag.unsubscribe();
  }

  private _setState(state: LoadingState) {
    this.show = state.show;
    console.log('this.show');
  }
}
