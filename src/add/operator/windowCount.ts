
import { RxObservable } from '../../internal/Observable';
import { windowCount } from '../../internal/patching/operator/windowCount';

RxObservable.prototype.windowCount = windowCount;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    windowCount: typeof windowCount;
  }
}
