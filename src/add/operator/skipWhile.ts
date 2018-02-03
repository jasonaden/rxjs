
import { RxObservable } from '../../internal/Observable';
import { skipWhile } from '../../internal/patching/operator/skipWhile';

RxObservable.prototype.skipWhile = skipWhile;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    skipWhile: typeof skipWhile;
  }
}
