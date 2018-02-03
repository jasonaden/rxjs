
import { RxObservable } from '../../internal/Observable';
import { repeat } from '../../internal/patching/operator/repeat';

RxObservable.prototype.repeat = repeat;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    repeat: typeof repeat;
  }
}
