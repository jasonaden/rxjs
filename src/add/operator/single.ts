
import { RxObservable } from '../../internal/Observable';
import { single } from '../../internal/patching/operator/single';

RxObservable.prototype.single = single;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    single: typeof single;
  }
}
