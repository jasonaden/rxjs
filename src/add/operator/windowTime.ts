
import { RxObservable } from '../../internal/Observable';
import { windowTime } from '../../internal/patching/operator/windowTime';

RxObservable.prototype.windowTime = windowTime;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    windowTime: typeof windowTime;
  }
}
