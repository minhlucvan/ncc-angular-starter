import { Subscription } from 'rxjs/Rx';

export interface Subs {
  [key: string]: Subscription;
}
