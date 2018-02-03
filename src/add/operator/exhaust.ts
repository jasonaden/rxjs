
import { RxObservable } from '../../internal/Observable';
import { exhaust } from '../../internal/patching/operator/exhaust';

RxObservable.prototype.exhaust = exhaust;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    exhaust: typeof exhaust;
  }
}
