
import { RxObservable } from '../../internal/Observable';
import { delay } from '../../internal/patching/operator/delay';

RxObservable.prototype.delay = delay;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    delay: typeof delay;
  }
}
