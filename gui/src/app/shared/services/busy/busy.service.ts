import { Injectable } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { ApiService, Action } from 'app/gateway/servicers/api/api.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class BusyService {
  debounceTime = 1000;

  private _lastRelease = Date.now();
  private _processingChunk = 0;
  private _completedChunk = 0;
  private _percent = 0;

  constructor(
    private _slimLoadingBarService: SlimLoadingBarService,
    private _api: ApiService
  ) {
    this._api.process
      .takeWhile(this._afterDebounceTime.bind(this))
      .do(this._actionHandle.bind(this))
      .takeWhile(this._lastStopQuery)
      .delay(300)
      .subscribe(this._release.bind(this));
  }

  private _afterDebounceTime() {
    return (Date.now() - this._lastRelease) > this.debounceTime;
  }

  private _lastStopQuery(action: Action): boolean {
   return (action === Action.QueryStop && this._completedChunk >= this._processingChunk);
  }

  private _pushProgressBar() {
    const vacancy = 100 - this._percent;
    const chunkLeft = (this._processingChunk - this._completedChunk);
    const piece = vacancy / chunkLeft;
    this._percent += piece;
    this._slimLoadingBarService.progress = this._percent;
  }

  private _completeProgressBar() {
    this._percent = 100;
    this._slimLoadingBarService.complete();
  }

  private _actionHandle(action: Action) {
    if (action === Action.QueryStart) {
      this._queryStartHandle();
    } else {
      this._queryStopHandler();
    }
  }

  private _queryStartHandle() {
    this._processingChunk += 2;
  }

  private _queryStopHandler() {
    this._completedChunk += 1;
    this._pushProgressBar();
  }

  private _reset() {
    this._processingChunk = 0;
    this._completedChunk = 0;
    this._slimLoadingBarService.reset();
  }

  private _release() {
    this._slimLoadingBarService.stop();
    this._reset();
    this._lastRelease = Date.now();
  }

}
