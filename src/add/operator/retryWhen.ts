
import { RxObservable } from '../../internal/Observable';
import { retryWhen } from '../../internal/patching/operator/retryWhen';

RxObservable.prototype.retryWhen = retryWhen;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    retryWhen: typeof retryWhen;
  }
}
