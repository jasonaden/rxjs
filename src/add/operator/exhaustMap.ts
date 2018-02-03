
import { RxObservable } from '../../internal/Observable';
import { exhaustMap } from '../../internal/patching/operator/exhaustMap';

RxObservable.prototype.exhaustMap = exhaustMap;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    exhaustMap: typeof exhaustMap;
  }
}
