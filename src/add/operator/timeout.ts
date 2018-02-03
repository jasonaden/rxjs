
import { RxObservable } from '../../internal/Observable';
import { timeout } from '../../internal/patching/operator/timeout';

RxObservable.prototype.timeout = timeout;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    timeout: typeof timeout;
  }
}
