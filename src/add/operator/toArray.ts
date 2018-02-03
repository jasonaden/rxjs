
import { RxObservable } from '../../internal/Observable';
import { toArray } from '../../internal/patching/operator/toArray';

RxObservable.prototype.toArray = toArray;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    toArray: typeof toArray;
  }
}
