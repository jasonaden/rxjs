
import { RxObservable } from '../../internal/Observable';
import { distinctUntilKeyChanged } from '../../internal/patching/operator/distinctUntilKeyChanged';

RxObservable.prototype.distinctUntilKeyChanged = distinctUntilKeyChanged;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    distinctUntilKeyChanged: typeof distinctUntilKeyChanged;
  }
}
