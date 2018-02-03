
import { RxObservable } from '../../internal/Observable';
import { skip } from '../../internal/patching/operator/skip';

RxObservable.prototype.skip = skip;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    skip: typeof skip;
  }
}
