
import { RxObservable } from '../../internal/Observable';
import { windowWhen } from '../../internal/patching/operator/windowWhen';

RxObservable.prototype.windowWhen = windowWhen;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    windowWhen: typeof windowWhen;
  }
}
