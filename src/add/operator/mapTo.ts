
import { RxObservable } from '../../internal/Observable';
import { mapTo } from '../../internal/patching/operator/mapTo';

RxObservable.prototype.mapTo = mapTo;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    mapTo: typeof mapTo;
  }
}
