
import { RxObservable } from '../../internal/Observable';
import { bufferTime } from '../../internal/patching/operator/bufferTime';

RxObservable.prototype.bufferTime = bufferTime;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    bufferTime: typeof bufferTime;
  }
}
