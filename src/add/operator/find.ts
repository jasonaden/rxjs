
import { RxObservable } from '../../internal/Observable';
import { find } from '../../internal/patching/operator/find';

RxObservable.prototype.find = find;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    find: typeof find;
  }
}
