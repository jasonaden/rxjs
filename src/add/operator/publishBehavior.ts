
import { RxObservable } from '../../internal/Observable';
import { publishBehavior } from '../../internal/patching/operator/publishBehavior';

RxObservable.prototype.publishBehavior = publishBehavior;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    publishBehavior: typeof publishBehavior;
  }
}
