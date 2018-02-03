
import { RxObservable } from '../../internal/Observable';
import { take } from '../../internal/patching/operator/take';

RxObservable.prototype.take = take;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    take: typeof take;
  }
}
