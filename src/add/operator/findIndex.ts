
import { RxObservable } from '../../internal/Observable';
import { findIndex } from '../../internal/patching/operator/findIndex';

RxObservable.prototype.findIndex = findIndex;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    findIndex: typeof findIndex;
  }
}
