
import { RxObservable } from '../../internal/Observable';
import { first } from '../../internal/patching/operator/first';

RxObservable.prototype.first = <any>first;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    first: typeof first;
  }
}
