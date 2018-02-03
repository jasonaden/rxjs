
import { RxObservable } from '../../internal/Observable';
import { filter } from '../../internal/patching/operator/filter';

RxObservable.prototype.filter = filter;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    filter: typeof filter;
  }
}
