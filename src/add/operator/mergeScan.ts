
import { RxObservable } from '../../internal/Observable';
import { mergeScan } from '../../internal/patching/operator/mergeScan';

RxObservable.prototype.mergeScan = mergeScan;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    mergeScan: typeof mergeScan;
  }
}
