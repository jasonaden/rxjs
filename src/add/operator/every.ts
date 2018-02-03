
import { RxObservable } from '../../internal/Observable';
import { every } from '../../internal/patching/operator/every';

RxObservable.prototype.every = every;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    every: typeof every;
  }
}
