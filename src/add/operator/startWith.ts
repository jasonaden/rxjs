
import { RxObservable } from '../../internal/Observable';
import { startWith } from '../../internal/patching/operator/startWith';

RxObservable.prototype.startWith = startWith;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    startWith: typeof startWith;
  }
}
