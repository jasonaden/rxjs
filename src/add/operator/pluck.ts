
import { RxObservable } from '../../internal/Observable';
import { pluck } from '../../internal/patching/operator/pluck';

RxObservable.prototype.pluck = pluck;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    pluck: typeof pluck;
  }
}
