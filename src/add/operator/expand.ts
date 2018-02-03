
import { RxObservable } from '../../internal/Observable';
import { expand } from '../../internal/patching/operator/expand';

RxObservable.prototype.expand = expand;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    expand: typeof expand;
  }
}
