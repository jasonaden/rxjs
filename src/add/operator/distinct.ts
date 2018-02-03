import { RxObservable } from '../../internal/Observable';
import { distinct } from '../../internal/patching/operator/distinct';

RxObservable.prototype.distinct = distinct;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    distinct: typeof distinct;
  }
}
