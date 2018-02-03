
import { RxObservable } from '../../internal/Observable';
import { concat } from '../../internal/patching/operator/concat';

RxObservable.prototype.concat = concat;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    concat: typeof concat;
  }
}
