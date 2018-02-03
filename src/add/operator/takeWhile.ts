
import { RxObservable } from '../../internal/Observable';
import { takeWhile } from '../../internal/patching/operator/takeWhile';

RxObservable.prototype.takeWhile = takeWhile;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    takeWhile: typeof takeWhile;
  }
}
