
import { RxObservable } from '../../internal/Observable';
import { defaultIfEmpty } from '../../internal/patching/operator/defaultIfEmpty';

RxObservable.prototype.defaultIfEmpty = defaultIfEmpty;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    defaultIfEmpty: typeof defaultIfEmpty;
  }
}
