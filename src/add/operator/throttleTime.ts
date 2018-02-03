
import { RxObservable } from '../../internal/Observable';
import { throttleTime } from '../../internal/patching/operator/throttleTime';

RxObservable.prototype.throttleTime = throttleTime;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    throttleTime: typeof throttleTime;
  }
}
