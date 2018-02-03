
import { RxObservable } from '../../internal/Observable';
import { elementAt } from '../../internal/patching/operator/elementAt';

RxObservable.prototype.elementAt = elementAt;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    elementAt: typeof elementAt;
  }
}
