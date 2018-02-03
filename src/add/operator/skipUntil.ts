
import { RxObservable } from '../../internal/Observable';
import { skipUntil } from '../../internal/patching/operator/skipUntil';

RxObservable.prototype.skipUntil = skipUntil;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    skipUntil: typeof skipUntil;
  }
}
