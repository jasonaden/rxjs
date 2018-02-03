
import { RxObservable } from '../../internal/Observable';
import { concatMap } from '../../internal/patching/operator/concatMap';

RxObservable.prototype.concatMap = concatMap;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    concatMap: typeof concatMap;
  }
}
