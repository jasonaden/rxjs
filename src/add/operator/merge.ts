
import { RxObservable } from '../../internal/Observable';
import { merge } from '../../internal/patching/operator/merge';

RxObservable.prototype.merge = merge;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    merge: typeof merge;
  }
}
