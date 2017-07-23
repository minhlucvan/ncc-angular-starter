import { Subs } from './subs.interface';
import * as _ from 'lodash';
import { Subscription } from 'rxjs/Rx';
import { SubCollection } from './sub-collection.inteface';

export class SubBag implements SubCollection {
  subs: Subs = {};

  unsubscribe() {
    _.values<Subscription>(this.subs).forEach(sub => sub.unsubscribe());
  }
}
