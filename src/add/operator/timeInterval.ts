
import { RxObservable } from '../../internal/Observable';
import { timeInterval } from '../../internal/patching/operator/timeInterval';

RxObservable.prototype.timeInterval = timeInterval;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    timeInterval: typeof timeInterval;
  }
}
