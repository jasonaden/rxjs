
import { RxObservable } from '../../internal/Observable';
import { bufferWhen } from '../../internal/patching/operator/bufferWhen';

RxObservable.prototype.bufferWhen = bufferWhen;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    bufferWhen: typeof bufferWhen;
  }
}
