
import { RxObservable } from '../../internal/Observable';
import { mergeMap } from '../../internal/patching/operator/mergeMap';

RxObservable.prototype.mergeMap = <any>mergeMap;
RxObservable.prototype.flatMap = <any>mergeMap;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    flatMap: typeof mergeMap;
    mergeMap: typeof mergeMap;
  }
}
