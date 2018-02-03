
import { RxObservable } from '../../internal/Observable';
import { throttle } from '../../internal/patching/operator/throttle';

RxObservable.prototype.throttle = throttle;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    throttle: typeof throttle;
  }
}
