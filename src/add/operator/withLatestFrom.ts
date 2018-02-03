
import { RxObservable } from '../../internal/Observable';
import { withLatestFrom } from '../../internal/patching/operator/withLatestFrom';

RxObservable.prototype.withLatestFrom = withLatestFrom;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    withLatestFrom: typeof withLatestFrom;
  }
}
