
import { RxObservable } from '../../internal/Observable';
import { concatAll } from '../../internal/patching/operator/concatAll';

RxObservable.prototype.concatAll = concatAll;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    concatAll: typeof concatAll;
  }
}
