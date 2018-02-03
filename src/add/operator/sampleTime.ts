
import { RxObservable } from '../../internal/Observable';
import { sampleTime } from '../../internal/patching/operator/sampleTime';

RxObservable.prototype.sampleTime = sampleTime;

declare module '../../internal/Observable' {
  interface RxObservable<T> {
    sampleTime: typeof sampleTime;
  }
}
