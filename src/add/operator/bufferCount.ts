
import { RxObservable } from '../../internal/Observable';
import { bufferCount } from '../../internal/patching/operator/bufferCount';

RxObservable.prototype.bufferCount = bufferCount;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    bufferCount: typeof bufferCount;
  }
}
