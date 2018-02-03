
import { RxObservable } from '../../internal/Observable';
import { delayWhen } from '../../internal/patching/operator/delayWhen';

RxObservable.prototype.delayWhen = delayWhen;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    delayWhen: typeof delayWhen;
  }
}
