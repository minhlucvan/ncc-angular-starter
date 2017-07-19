import { SetStateAction } from './../app.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class AppStateService<T> {

  saveEvent: EventEmitter<any> = new EventEmitter();

  constructor(
    public store: Store<T>
  ) { }

  /**
   * Already return a clone of the current state.
   */
  public state(): Observable<T> {
    return this.store.select();
  }


  /**
   * Internally mutate our state.
   */
  public set(paths: string[], value: any) {
    this.store.dispatch(new SetStateAction(paths, value));
  }

  /**
   * Select a store value by selector
   * selector can be a sequence of strings or a pure function take a state and return a property
   * @see https://gist.github.com/btroncone/a6e4347326749f938510#extracting-selectors-for-reuse
   */
  public select<V>(pathOrMapFn: any, ...paths: string[]): Observable<V> {
    return this.store.select(pathOrMapFn, ...paths);
  }
}
