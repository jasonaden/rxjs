
import { RxObservable } from '../../internal/Observable';
import { mergeMapTo } from '../../internal/patching/operator/mergeMapTo';

RxObservable.prototype.flatMapTo = <any>mergeMapTo;
RxObservable.prototype.mergeMapTo = <any>mergeMapTo;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    flatMapTo: typeof mergeMapTo;
    mergeMapTo: typeof mergeMapTo;
  }
}
