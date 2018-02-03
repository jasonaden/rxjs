
import { RxObservable } from '../../internal/Observable';
import { concatMapTo } from '../../internal/patching/operator/concatMapTo';

RxObservable.prototype.concatMapTo = concatMapTo;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    concatMapTo: typeof concatMapTo;
  }
}
