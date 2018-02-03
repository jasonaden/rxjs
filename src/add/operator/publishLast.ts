
import { RxObservable } from '../../internal/Observable';
import { publishLast } from '../../internal/patching/operator/publishLast';

RxObservable.prototype.publishLast = publishLast;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    publishLast: typeof publishLast;
  }
}
