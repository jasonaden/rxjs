
import { RxObservable } from '../../internal/Observable';
import { last } from '../../internal/patching/operator/last';

RxObservable.prototype.last = <any>last;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    last: typeof last;
  }
}
