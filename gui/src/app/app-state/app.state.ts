import { RouterState } from '@ngrx/router-store';

export interface AppState {
  router: RouterState;
}


export const initialAppState: AppState = null;
