
import { RxObservable } from '../../internal/Observable';
import { sample } from '../../internal/patching/operator/sample';

RxObservable.prototype.sample = sample;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    sample: typeof sample;
  }
}
