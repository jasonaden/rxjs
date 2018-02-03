
import { RxObservable } from '../../internal/Observable';
import { reduce } from '../../internal/patching/operator/reduce';

RxObservable.prototype.reduce = reduce;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    reduce: typeof reduce;
  }
}
