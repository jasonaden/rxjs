
import { RxObservable } from '../../internal/Observable';
import { retry } from '../../internal/patching/operator/retry';

RxObservable.prototype.retry = retry;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    retry: typeof retry;
  }
}
