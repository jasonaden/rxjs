
import { RxObservable } from '../../internal/Observable';
import { pairwise } from '../../internal/patching/operator/pairwise';

RxObservable.prototype.pairwise = pairwise;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    pairwise: typeof pairwise;
  }
}
