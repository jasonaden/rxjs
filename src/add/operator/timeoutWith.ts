
import { RxObservable } from '../../internal/Observable';
import { timeoutWith } from '../../internal/patching/operator/timeoutWith';

RxObservable.prototype.timeoutWith = timeoutWith;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    timeoutWith: typeof timeoutWith;
  }
}
