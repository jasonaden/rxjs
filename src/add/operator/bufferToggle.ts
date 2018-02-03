
import { RxObservable } from '../../internal/Observable';
import { bufferToggle } from '../../internal/patching/operator/bufferToggle';

RxObservable.prototype.bufferToggle = bufferToggle;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    bufferToggle: typeof bufferToggle;
  }
}
