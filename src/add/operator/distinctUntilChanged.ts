
import { RxObservable } from '../../internal/Observable';
import { distinctUntilChanged } from '../../internal/patching/operator/distinctUntilChanged';

RxObservable.prototype.distinctUntilChanged = distinctUntilChanged;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    distinctUntilChanged: typeof distinctUntilChanged;
  }
}
