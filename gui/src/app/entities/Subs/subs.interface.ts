import { Subscription } from 'rxjs/Rx';

export interface Subs {
  [key: string]: Subscription;
}

export interface SubCollection {
  subs: Subs;
  unsubscribe: () => void;
}
