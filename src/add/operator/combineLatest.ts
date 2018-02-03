
import { RxObservable } from '../../internal/Observable';
import { combineLatest } from '../../internal/patching/operator/combineLatest';

RxObservable.prototype.combineLatest = combineLatest;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    combineLatest: typeof combineLatest;
  }
}
