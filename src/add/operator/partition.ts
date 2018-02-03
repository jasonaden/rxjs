
import { RxObservable } from '../../internal/Observable';
import { partition } from '../../internal/patching/operator/partition';

RxObservable.prototype.partition = partition;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    partition: typeof partition;
  }
}
