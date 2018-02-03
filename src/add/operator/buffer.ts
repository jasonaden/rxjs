
import { RxObservable } from '../../internal/Observable';
import { buffer } from '../../internal/patching/operator/buffer';

RxObservable.prototype.buffer = buffer;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    buffer: typeof buffer;
  }
}
