
import { RxObservable } from '../../internal/Observable';
import { count } from '../../internal/patching/operator/count';

RxObservable.prototype.count = count;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    count: typeof count;
  }
}
