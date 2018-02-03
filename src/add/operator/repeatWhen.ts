
import { RxObservable } from '../../internal/Observable';
import { repeatWhen } from '../../internal/patching/operator/repeatWhen';

RxObservable.prototype.repeatWhen = repeatWhen;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    repeatWhen: typeof repeatWhen;
  }
}
