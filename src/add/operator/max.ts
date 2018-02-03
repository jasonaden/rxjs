
import { RxObservable } from '../../internal/Observable';
import { max } from '../../internal/patching/operator/max';

RxObservable.prototype.max = max;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    max: typeof max;
  }
}
