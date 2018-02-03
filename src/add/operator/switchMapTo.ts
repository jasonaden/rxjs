
import { RxObservable } from '../../internal/Observable';
import { switchMapTo } from '../../internal/patching/operator/switchMapTo';

RxObservable.prototype.switchMapTo = switchMapTo;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    switchMapTo: typeof switchMapTo;
  }
}
