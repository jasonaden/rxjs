
import { RxObservable } from '../../internal/Observable';
import { combineAll } from '../../internal/patching/operator/combineAll';

RxObservable.prototype.combineAll = combineAll;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    combineAll: typeof combineAll;
  }
}
