
import { RxObservable } from '../../internal/Observable';
import { isEmpty } from '../../internal/patching/operator/isEmpty';

RxObservable.prototype.isEmpty = isEmpty;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    isEmpty: typeof isEmpty;
  }
}
