import { RxObservable } from '../../internal/Observable';
import { onErrorResumeNext } from '../../internal/patching/operator/onErrorResumeNext';

RxObservable.prototype.onErrorResumeNext = onErrorResumeNext;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    onErrorResumeNext: typeof onErrorResumeNext;
  }
}
