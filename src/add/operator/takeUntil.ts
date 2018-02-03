
import { RxObservable } from '../../internal/Observable';
import { takeUntil } from '../../internal/patching/operator/takeUntil';

RxObservable.prototype.takeUntil = takeUntil;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    takeUntil: typeof takeUntil;
  }
}
