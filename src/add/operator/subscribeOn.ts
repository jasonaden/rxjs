
import { RxObservable } from '../../internal/Observable';
import { subscribeOn } from '../../internal/patching/operator/subscribeOn';

RxObservable.prototype.subscribeOn = subscribeOn;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    subscribeOn: typeof subscribeOn;
  }
}
