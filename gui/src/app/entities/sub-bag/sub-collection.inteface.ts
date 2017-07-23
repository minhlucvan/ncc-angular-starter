import { Subs } from './subs.interface';

export interface SubCollection {
  subs: Subs;
  unsubscribe: () => void;
}
