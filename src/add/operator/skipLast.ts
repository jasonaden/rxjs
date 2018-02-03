import { RxObservable } from '../../internal/Observable';
import { skipLast } from '../../internal/patching/operator/skipLast';

RxObservable.prototype.skipLast = skipLast;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    skipLast: typeof skipLast;
  }
}
