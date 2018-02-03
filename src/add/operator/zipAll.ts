
import { RxObservable } from '../../internal/Observable';
import { zipAll } from '../../internal/patching/operator/zipAll';

RxObservable.prototype.zipAll = zipAll;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    zipAll: typeof zipAll;
  }
}
