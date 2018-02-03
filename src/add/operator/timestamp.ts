import { RxObservable } from '../../internal/Observable';
import { timestamp } from '../../internal/patching/operator/timestamp';

RxObservable.prototype.timestamp = timestamp;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    timestamp: typeof timestamp;
  }
}
