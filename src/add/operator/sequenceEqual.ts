
import { RxObservable } from '../../internal/Observable';
import { sequenceEqual } from '../../internal/patching/operator/sequenceEqual';

RxObservable.prototype.sequenceEqual = sequenceEqual;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    sequenceEqual: typeof sequenceEqual;
  }
}
