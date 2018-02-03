
import { RxObservable } from '../../internal/Observable';
import { min } from '../../internal/patching/operator/min';

RxObservable.prototype.min = min;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    min: typeof min;
  }
}
