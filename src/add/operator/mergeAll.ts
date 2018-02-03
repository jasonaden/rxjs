
import { RxObservable } from '../../internal/Observable';
import { mergeAll } from '../../internal/patching/operator/mergeAll';

RxObservable.prototype.mergeAll = mergeAll;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    mergeAll: typeof mergeAll;
  }
}
